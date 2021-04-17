var fspeed = 64;

const conf = {
        typeSpeed : fspeed,
        smartBackspace : false,
        cursorChar : '&#x2588;',
        typeSpeed : fspeed,
        backSpeed : 0,
        loop : false,
};


document.addEventListener('DOMContentLoaded', function()
        {
                var typed = new Typed('#typed',
                        {
                                stringsElement: '#typed-strings',
                                cursorChar: '&#x2588;',
                                typeSpeed: 0,
                                backSpeed: 0,
                                startDelay: 0,
                                loop: false,
                                loopCount: Infinity,
                                onBegin: function(self) {
                                        prettyLog('onBegin ' + self);
                                },
                                onComplete: function(self) {
                                        prettyLog('onComplete ' + self);
                                        self.destroy();
                                },
                                preStringTyped: function(pos, self)
                                {
                                        prettyLog('preStringTyped ' + pos + ' ' + self);
                                },
                                onStringTyped: function(pos, self)
                                {
                                        prettyLog('onStringTyped ' + pos + ' ' + self);
                                },
                                onLastStringBackspaced: function(self)
                                {
                                        prettyLog('onLastStringBackspaced ' + self);
                                },
                                onTypingPaused: function(pos, self)
                                {
                                        prettyLog('onTypingPaused ' + pos + ' ' + self);
                                },
                                onTypingResumed: function(pos, self)
                                {
                                        prettyLog('onTypingResumed ' + pos + ' ' + self);
                                },
                                onReset: function(self)
                                {
                                        prettyLog('onReset ' + self);
                                },
                                onStop: function(pos, self) {
                                        prettyLog('onStop ' + pos + ' ' + self);
                                },
                                onStart: function(pos, self)
                                {
                                        prettyLog('onStart ' + pos + ' ' + self);
                                },
                                onDestroy: function(self) {
                                        prettyLog('onDestroy ' + self);
                                        edu();
                                }
                        })
        })

function edu()
{
        const str = "`EDUCATION`\n" +
                "`[April 2014] Paymon redceived his Bachelors in Mathematics and Statistics, awarded with distinction``\n`"

        new Typed('#edu', {
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 0,
                backSpeed : 0,
                loop : false,
                strings : [ str ],
                onComplete: function(self)
                {
                        prettyLog('onComplete ' + self);
                        proglangs();
                }})
}

function proglangs()
{
          const str =
                "`PROGRAMMING LANGUAGES`\n" +
                "`Paymon is mainly a system programmer. He codes mostly in C and sometimes C++ writing threaded, realtime applicaton, server daemons`\n" +
                "`He also has experience coding in python, php, sh, R, lua, perl postgres, mysql, javascript, etc`\n" +
                "`In the past he has taken on the role of system administrator of realtime production applicatons (carrier telephony)," +
                " either running in containers and/or VMs (xen, qemu and KVM)`\n" +
                "`He usually starts his day marvelling at some linux kernel code while sipping his coffee.`\n" +
                "`Kernel's Network Stack, and lately boot code for little boards is what he likes to fiddle with.`\n" +
                "`Build systems and pkg managers he works with on a day-to-day basis:`\n" +
                "`\tKconfig, portage (poky too), buildroot``\n`";
        new Typed('#proglangs', {
                smartBackspace : true,
                cursorChar : '&#x2588;',
                typeSpeed : fspeed,
                backSpeed : 0,
                loop : false,
                strings : [ str ],
                onComplete: function(self)
                {
                        prettyLog('onComplete ' + self);
                        work();
                }})
}

function work()
{
        const str = "`WORK EXPERIENCE\n`" +
                "`[Jan 2010 - Aug 2011] Paymon worked System Programmer/Admin at " +
                "<a href=" +
                "https://www.concordia.ca/finearts/cda.html" +
                " class='cyan'>" +
                "CDA (Center for Digital Art)" +
                "</a>`\n" +
                "`[May 2014 - May 2016] Paymon did IT Consultant!`\n" +
                "`[May 2016 - Jul 2019] Paymon worked at " +
                "<a href=" +
                "http://www.nunetworx.com" +
                " class='cyan'>" +
		"NuNetworx Inc." +
                "</a>" + " as System/Network Developer/Administrator`\n" +
                "`[Nov 2019 - Jun 2020] Paymon worked at " +
                "<a href=" +
                "https://savoirfairelinux.com" +
                " class='cyan'>" +
                "Savoir Faire Linux " +
                "</a>" + " as part of Jami's core development team`\n" +
                "`[Nov 2020 - Current ] Paymon works as a Software Engineer and System Admin at " +
                "<a href=" +
                "https://hiala.io" +
                " class='cyan'>" +
                "Haila Inc." +
                "</a>``\n`";
        new Typed('#work', {
                typeSpeed : fspeed,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 128,
                backSpeed : 0,
                loop : false,
                strings : [ str ],
                onComplete: function(self)
                {
                        prettyLog('onComplete ' + self);
                        misc();
                }})
}

function misc()
{
        const str = "`MISCELLANEOUS`\n" +
                "`Paymon spkeas Fluent Engligh and  Advanced Intermediate French`\n" +
                "`Paymon's Native Languages are Farsi, Azerbaijani`\n" +
                "`Paymon also liks Cognitive Science, Philosophy, Linguistics, Economics and System Theory`\n" +
                "`He _liks_ to think he is an avid Rock Climber (he's not), a Cyclist (possibly) and an *ok* Swimmer (that's a joke).`\n" +
                "`He Played [Association] Football professionally until the age of 18 when he had to stop because of injury.``\n`";

        new Typed('#misc', {
                typeSpeed : fspeed,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : fspeed,
                backSpeed : 0,
                loop : false,
                strings : [ str ],
                onComplete: function(self)
                {
                        prettyLog('onComplete ' + self);
                        contrib();
                }})
}

function contrib()
{
        const str = "`OPEN SOUCE CONTRIBUTIONS`\n" +
                "`Paymon has following open source contributions`\n" +
                "`- systemd/mkosi\n`" +
                "`\t<a href=" +
                "https://github.com/systemd/mkosi/commit/f0386b00cfd2c897cbbaad50b0e717e7221676bc" +
                " class='cyan'>" +
                "f0386b00" +
                "</a>`\n" +
                "`- CMake`\n" +
                "`\t<a href=" +
                "https://gitlab.kitware.com/cmake/cmake/-/commit/3211e07dc6f2b52570f7b9e1034a2e0394c83862" +
                " class='cyan'>" +
                "Ncurses Module" +
                "</a>`\n" +
                "`- pjsip`\n" +
                "`\t<a href=" +
                "https://github.com/pjsip/pjproject/commit/645611d8a985a03f7509ec1455ed3de4a2e12ebb" +
                " class='cyan'>" +
                "Implementation of on_valid_pair() in ICE STREAM TRANSPORT" +
                "</a>`\n" +
                "`\t<a href=" +
                "https://github.com/pjsip/pjproject/pull/2363" +
                " class='cyan'>" +
                "Collaborating on the implementation of RFC 6544" +
                "</a>`\n" +
                "`\t<a href=" +
                "https://github.com/savoirfairelinux/opendht/commit/9487bc5e422c64735f69ccc303636bc2124027be" +
                " class='cyan'>" +
                "Implementation of connectivity change in peer discovery module of opendht" +
                "</a>`\n" +
                "`\t<a href=" +
                "'https://github.com/savoirfairelinux/opendht/compare/master...257:connstat'" +
                " class='cyan'>" +
                "Implementation of ConnectivityChange() in linux based OSes to work directly with kernel via Netlink" +
                "</a>`\n" +
                "`- Jami contributions`\n" +
                "`\t<a href=" +
                "https://review.jami.net/q/author:jrun" +
                " class='cyan'>" +
                "Jami contributions" +
                "</a>`\n" +
                "`- Other Contributions on github`\n" +
                "`\t<a href=" +
                "https://github.com/257" +
                " class='cyan'>" +
                "Contributions on github" +
                "</a>``\n`";

        new Typed('#contrib', {
                typeSpeed : fspeed,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : fspeed,
                backSpeed : 0,
                loop : false,
                strings : [ str ],
                onComplete: function(self)
                {
                        prettyLog('onComplete ' + self);
                        // footie();
                }})
}

function footie()
{
        const str = "`Football Career`\n" +
                "`<table style='width:48%'>`" +
                        "`<tr>" +
                                "<th style='text-align:left'>Year</th>" +
                                "<th style='text-align:left'>Club</th>" +
                                "<th style='text-align:left'>Position/Notes</th>" +
                        "`</tr>" +
                        "`<tr>" +
                                "<td>1995-1996</td><td>Kesahvarz F.C.</td><td>Midfielder<td>" +
                        "`</tr>" +
                        "`<tr>" +
                                "<td>1996-1997</td><td>Bazyaft F.C.</td><td>Midfielder</td>";
                        "`</tr>" +
                "`</table>`"

        new Typed('#footie', {
                typeSpeed : fspeed,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 128,
                backSpeed : 0,
                loop : false,
                strings : [ str ],
                onComplete: function(self)
                {
                        prettyLog('onComplete ' + self);
                }})
}



function prettyLog(str)
{
        console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed)
{
        if (typed.loop) {
                typed.loop = false;
        } else {
                typed.loop = true;
        }
}
