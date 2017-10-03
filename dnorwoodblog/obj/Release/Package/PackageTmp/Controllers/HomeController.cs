using dnorwoodblog.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using PagedList;
using PagedList.Mvc;

namespace dnorwoodblog.Controllers
{
    [RequireHttps]
    public class HomeController : Universal
    {
        
        public ActionResult Index( int? page)
        {
            int pageSize = 2;
            int pageNumber = (page ?? 1);

            if (Request.IsAuthenticated && User.IsInRole("Admin"))
            {
                return View(db.Posts.OrderByDescending(p => p.Created).ToPagedList(pageNumber, pageSize));
            }
            return View(db.Posts.Where(p => p.Published == true).OrderByDescending(p => p.Id).OrderByDescending(p => p.Created).ToPagedList(pageNumber, pageSize));
        }
        [HttpPost]
        public ActionResult Index(string searchStr, int? page)
        {
            int pageSize = 3;
            int pageNumber = (page ?? 1);
            ViewBag.Search = searchStr;
            SearchHelper search = new SearchHelper();
            var bloglist = search.IndexSearch(searchStr);

            if (Request.IsAuthenticated && User.IsInRole("Admin"))
            {
                return View(bloglist.OrderByDescending(p => p.Created).ToPagedList(pageNumber, pageSize));
            }
            return View(bloglist.Where(p => p.Published == true).OrderByDescending(p => p.Id).OrderByDescending(p => p.Created).ToPagedList(pageNumber, pageSize));
            
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]          
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold>({1})</p><p>Message:</p><p>{2}</p>";                               
                    var from = "MyPortfolio<dnorwood22@gmail.com>";
                    var subject = "Portfolio Contact Email: (no subject)";
                    if (model.Subject != null)
                    {
                        subject = "Portfolio Contact Email: " + model.Subject;
                    }
                    
                                  
                    var email = new MailMessage(from,
                                ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = subject,
                        Body = string.Format(body, model.FromName, model.FromEmail, model.Body),
                        IsBodyHtml = true
                    };

                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);

                    return RedirectToAction("Sent");
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);
        }
    }
 }