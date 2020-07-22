var conf = {
        typeSpeed : 0,
        smartBackspace : false,
        cursorChar : '&#x2588;',
        typeSpeed : 0,
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
                                        edu();
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
                                }
                        })
        })

function edu()
{
        var str = [
                "`EDUCATION\n`" +
                "`[April 2014] Paymon redceived his Bachelors in Mathematics and Statistics, awarded with distinction`" +
                "`\n`"
        ];

        new Typed('#edu', {
                typeSpeed : 0,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 0,
                backSpeed : 0,
                loop : false,
                strings : str,
                onComplete: function(self)
                {
                        prettyLog('onComplete ' + self);
                        proglangs();
                }})
}

function proglangs()
{
          var str =
                "`PROGRAMMING LANGUAGES`\n" +
                "`Paymon is mainly a system programmer. He codes, mostly, in C and C++\n" +
                "`mostly writing server daemons\n`" +
                "`However he also codes and has experience in python, php, sh, R, lua, perl postgres, mysql, javascript, etc\n`" +
                "`He also has taken on the role of administration of containers, VMs (xen, qemu and KVM) in production environment\n`" +
                "`Build systems, pkg managers he's deals with on a day-to-day basis are\n`" +
                "`\tkernel builds, yocto, gentoo (portage), openwrt (buildroot) and make (autotools et al)`" +
                "`\n`";
        new Typed('#proglangs', {
                typeSpeed : 0,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 0,
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
        var str =
                "`WORK EXPERIENCE\n`" +
                "`[Jan 2010 - Aug 2011] Paymon worked at CDA as System Programmer/Admin`\n" +
                "`[May 2014 - May 2016] Paymon did IT Consultant!`\n" +
                "`[May 2016 - Jul 2019] Paymon worked at NuNetworx Inc. as Developer and System and Network Administrator\n`" +
                "`[Nov 2019 -  Current] Paymon works at Savoir Faire Linux as part of Jami core development team`" +
                "`\n`";

        new Typed('#work', {
                typeSpeed : 0,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 0,
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
        var str =
                "`MISCELLANEOUS\n`" +
                "`Paymon spkeas Fluent Engligh and  Advanced Intermediate French\n`" +
                "`Paymon's mother tongue is Farsi, Azerbaijani\n" +
                "`Paymon also liks Cognitive Science, Philosophy, Linguistics, Economics\n" +
                "`He is an avid Rock Climbing and Cyclist and liks Swimming, Running and [Association] Football`" +
                "`\n`";
        new Typed('#misc', {
                typeSpeed : 0,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 0,
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
        var str =
                "`OPEN SOUCE CONTRIBUTIONS\n`" +
                "`Paymon has following open source contributions\n`" +
                "`- CMake\n`" +
                "`\t<a href=" +
                "https://gitlab.kitware.com/cmake/cmake/-/commit/3211e07dc6f2b52570f7b9e1034a2e0394c83862" +
                ">" +
                "Ncurses Module" +
                "</a>\n`" +
                "`- pjsip\n`" +
                "`\t<a href=" +
                "https://github.com/pjsip/pjproject/commit/645611d8a985a03f7509ec1455ed3de4a2e12ebb" +
                ">" +
                "Implementation of on_valid_pair() in ICE STREAM TRANSPORT" +
                "</a>\n`" +
                "`\t<a href=" +
                "https://github.com/pjsip/pjproject/pull/2363" +
                ">" +
                "Collaboration of implementation of RFC 6544" +
                "</a>\n`" +
                "`\t<a href=" +
                "https://github.com/savoirfairelinux/opendht/commit/9487bc5e422c64735f69ccc303636bc2124027be" +
                ">" +
                "Implementation of connectivity change in peer discovery module of opendht" +
                "</a>\n`" +
                "`\t<a href=" +
                "'https://github.com/savoirfairelinux/opendht/compare/master...257:connstat'" +
                ">" +
                "Implementation of ConnectivityChange() in linux based OSes to work directly with kernel via Netlink" +
                "</a>\n`" +
                "`<a href=" +
                "https://review.jami.net/q/author:jrun" +
                ">" +
                "- Jami contributions" +
                "</a>\n`" +
                "`<a href=" +
                "https://github.com/257" +
                ">" +
                "- Contributions on github" +
                "</a>\n`";

        new Typed('#contrib', {
                typeSpeed : 0,
                smartBackspace : false,
                cursorChar : '&#x2588;',
                typeSpeed : 0,
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