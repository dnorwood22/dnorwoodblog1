using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(dnorwoodblog.Startup))]
namespace dnorwoodblog
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
