using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BullsAndCows1._0.Models;

namespace BullsAndCows1._0.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public string GenerateCode()
        {
            Game theGame = new Game();
            return theGame.theCodeGenerator();
        }
    }
}