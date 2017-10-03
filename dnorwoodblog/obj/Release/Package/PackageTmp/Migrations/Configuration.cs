namespace dnorwoodblog.Migrations
{
    using dnorwoodblog.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<dnorwoodblog.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(dnorwoodblog.Models.ApplicationDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(
                 new RoleStore<IdentityRole>(context));
            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
            }
            if (!context.Roles.Any(r => r.Name == "Moderator"))
            {
                roleManager.Create(new IdentityRole { Name = "Moderator" });
            }
            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            if (!context.Users.Any(u => u.Email == "dnorwood22@gmail.com"))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = "dnorwood22@gmail.com",
                    Email = "dnorwood22@gmail.com",
                    FirstName = "Dexter",
                    LastName = "Norwood",
                }, "Password1!");
            }
            var userId = userManager.FindByEmail("dnorwood22@gmail.com").Id;
            userManager.AddToRole(userId, "Admin");

            if (!context.Users.Any(u => u.Email == "Moderator@gmail.com"))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = "Moderator@gmail.com",
                    Email = "Moderator@gmail.com",
                    FirstName = "Coder",
                    LastName = "Foundry",
                }, "Password1!");
            }
            var userId_mod = userManager.FindByEmail("Moderator@gmail.com").Id;
            userManager.AddToRole(userId, "Moderator");
        }
    }
}
