$(function() {
  var VintageTxtTest = {
    
    el : $('#doThis'),
    
    go : function go() {
      this.el.vintageTxt({
         text : [
"you asked for my resume? let me find that...",
"how are you btw?",
"i'm running bits slow today just give us a sec...",
"found it! that's a big one!",
"running out of mem... there you go before that happens:" 
        ]
        ,textSpeed: 16
        ,linePause: 128
        ,promptEnabled: false
        ,onFinishedTyping : function(){setTimeout(self.edu, 2000);}
      });

    },

    edu : function edu() {
    var fill_screen = Array(32).join("\n");
    var texts = [
[fill_screen],
["EDUCATION",
"BA with Distinction in Mathematics and Statistics (Graduated April 2014)",
"Biology and Medical Sciences courses from University of Debrecen, Medical School",
"\n",
"EMPLOYMENT HISTORY",
"Year                       Employer                               Position/Notes",
"1995-1996                  [1] Kesahvarz F.C.                     Midfielder",
"1996-1997                  Bazyaft F.C.                           Midfielder",
"1998-2003                  Belal Electric Motor MFG Co.           IT Consultant",
"1998-2003                  Self-employed                          Tehran's Grand Bazaar",
"2008-2010                  School of Cinema Concordia Uni.        Post-Prod. Assistant, sysadmin",
"2010-2011                  Centre for Digital Arts Concordia Uni. *nix consultant, sysadmin",
"2014-Current               Pharex Canada                          network admin",
"\n",
"SPOKEN LANGUAGES",
"Fluent                     English, Farsi, Azerbaijani",
"Elementary                 French",
"\n",
"PROGRAMMING LANGUAGES, TECHNICAL CERTIFICATES, etc",
"Programming Languages      C, make, sh, python, Mathematica, R",
"Open source collaborations openwrt, gentoo",
"Certificates               Apple Certified Support Professional 10.5 (ACSP)",
"\n",
"Server Administration",
"Network                    DNS, DHCP, QoS, VoIP/sip, VPN, edgeos (vyatta/vyos fork) admin",
"                           Currently am ISP to my own résidence (7 units plus Pharex Canada)",
"Directory services         Open Directory (OSX version of openldap), kerborized triangle",
"Image deployment           deploy studio"]
      ];

      self.el.vintageTxt('updateOptions', {
        textSpeed : 4
        ,linePause : 1024
        ,maxRows : 32
        ,onFinishedTyping : null
        ,promptEnabled : false
      });
      self.el.vintageTxt('playMany',texts);
    },


    spawnNew : function spawnNew() {
      $('#miniTxt').vintageTxt({
        promptEnabled : false
        ,onFinishedTyping : function(){setTimeout(self.finalPage, 1000);}
      });
    },

  }
  var self = VintageTxtTest;

  VintageTxtTest.go();

});
