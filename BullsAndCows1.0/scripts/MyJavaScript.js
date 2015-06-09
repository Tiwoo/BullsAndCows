$(function () {

    $("#codeGenerator").click(function () {
        $.ajaxSetup({
            url: "Home/GenerateCode", success: function (data) {
                $("#codeBox").text(data);
                
            },
            cache: false
        });
        $.ajax();
        $("#codeBox").hide();
        $("#codeGenerator").attr("disabled", true);
    });
    
    var attempt = 0;

    function TryParseInt(str,defaultValue) {
        var retValue = defaultValue;
        if(str !== null) {
            if(str.length === 4) {
                if (!isNaN(str)) {
                    retValue = parseInt(str);
                }
            }
        }
        return retValue;
    }

    function containDuplicate(intArray)
    {
        for (i = 0; i < intArray.length - 1; ++i)
        {
            if (intArray[i] == intArray[i + 1])
            {
                return true;
            }
        }
        return false;
    }

    $("#submit").click(function () {

        var bullsCount = 0;
        var cowsCount = 0;
        var codeProgram = $("#codeBox").text();
        var codeText = $("#codeUser").val();
        var codeUserIntArray = codeText.split("");
        var codeMessage = "You have entered - " + codeText;
        var codeInt = TryParseInt(codeText, 0);
        var resultMessage = "";
        var asWon = false;
        if ((codeInt !== 0) && (containDuplicate(codeUserIntArray) === false ))
        {
            attempt++;
            codeProgramArray = codeProgram.split("");
            codeTextArray = codeText.split("");
           
            for (i = 0; i < codeProgramArray.length; i++)
            {
                if (codeProgramArray[i] === codeTextArray[i])
                {
                    bullsCount++;
                }
                else
                {
                    if (codeProgram.indexOf(codeTextArray[i]) != -1)
                    {
                        cowsCount++;
                    }
                }
            }

            if (bullsCount === 4 && attempt < 10)
            {
                asWon = true;
                
            }
            else
            {
                resultMessage = bullsCount + " Bulls and " + cowsCount + " Cows! Try again - " + (10 - attempt) + " more attempts to go!";
                $("#corps").prepend("<article id='validCode'>" + "Attempt #" + attempt + ":" + codeMessage + "<br\>Result: " + resultMessage + "</article>");
            }
               
        }
        else
        {
            $("#corps").prepend("<article id='invalidCode'>" + codeMessage + "<br />Invalid entry: You must strictly enter a number of 4 distinct digits! Please try again! </article>");
            
        }

        $("#codeUser").val("");

        if (attempt === 10 && asWon === false)
        {
            $("#corps").prepend("<article id='gameOver'> GAME OVER!!!</artice><article id='lookCode'>Check the code </article>");
            $("#corps").prepend("<input type='button' id='startAgain' value='Start Again' />");
            $("#startAgain").click(function () {
                $("#codeBox").val("");
                location.reload(true);
            });
            $("#submit").attr("disabled", true);
            $("#codeBox").show();
        }

        if (asWon == true && attempt <= 10)
        {
            $("#corps").prepend("<article id = 'bravo'>Bravo! You won! </article><article id='codeWinner'>Indeed the code was:" + codeText + "</article>")
            $("#corps").prepend("<input type='button' id='startAgain' value='Start Again' />");
            $("#startAgain").click(function () {
                $("#codeBox").val("");
                location.reload(true);
            });
            $("#submit").attr("disabled", true);
            $("#codeBox").show();
        }
    });



});
