using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Web;

namespace BullsAndCows1._0.Models
{
    public class Game
    {
        public string theCodeGenerator()
        {
            int aDigit;
            List<int> myCode = new List<int>();
            Random random = new Random();

            do
            {
                aDigit = random.Next(0, 9);
                if (!myCode.Contains(aDigit))
                    myCode.Add(aDigit);
            } while (myCode.Count < 4);

            StringBuilder theCode = new StringBuilder();
            foreach (int i in myCode)
            {
                theCode.Append(i);
            }

            return theCode.ToString();
        }
    }
}