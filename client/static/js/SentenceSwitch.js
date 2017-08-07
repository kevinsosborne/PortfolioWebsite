 $(function () {
            count = 0;
            wordsArray = ["can build Full-Stack Apps ", "is bilingual in Chinese and English ", "brings international work experience ", "has a passion for coding and teamwork "];
            setInterval(function () {
                count++;
                $("#word").fadeOut(700, function () {
                $(this).text(wordsArray[count % wordsArray.length]).fadeIn(700);
                });
            }, 4000);
            });