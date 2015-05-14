$(function() {
  var VintageTxtTest = {
    
    el : $('#doThis'),
    
    go : function go() {
      this.el.vintageTxt({
         text : ["you asked for my resume? coming up..."]
        ,textSpeed: 16
        ,promptEnabled: false
        ,onFinishedTyping : this.edu
      });

    },

    edu : function edu() {
      var texts = [
["EDUCATION",
"BA with Distinction in Mathematics and Statistics (Graduated April 2014)",
"Biology and Medical Sciences courses from University of Debrecen, Medical School"]
      ];

      self.el.vintageTxt('updateOptions', {
        textSpeed: 16
        ,onFinishedTyping : self.emp_history
        ,promptEnabled : false
      });
      self.el.vintageTxt('playMany',texts);
    },

    emp_history : function emp_history() {
      var texts = [

["EMPLOYMENT HISTORY"],
["Year\tEmployer\tPosition/Notes"],
["1995-1996\t[1] Kesahvarz F.C.\tMidfielder"],
["1996-1997\tBazyaft F.C.\tMidfielder"],
["1998-2003\tBelal Electric Motor MFG Co.\tIT Consultant"],
["1998-2003\tSelf-employed\tTehran's Grand Bazaar"],
["2008-2010\tSchool of Cinema Concordia Uni.\tPost-Prod. Assistant, sysadmin"],
["2010-2011\tCentre for Digital Arts Concordia Uni.\t*nix consultant, sysadmin"],
["2014-Current\tPharex Canada\tnetwork admin"],
      ];

      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : self.pageTwo
        ,onEnterKey : null
        ,promptEnabled : false
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageTwo : function pageTwo() {
      self.el.vintageTxt('reset'
        ,["... like changing the typing speed,","and the delay for carriage returns.","So you can type lots and lots and lots and lots and lots and lots and lots of stuff without waiting forever."," ","See!?!"]
        ,{  textSpeed : 10
           ,linePause : 30
           ,onFinishedTyping : function(){setTimeout(self.pageThree, 2000);}
        }
      );
    },

    pageThree : function pageThree() {
      self.el.vintageTxt('reset'
        ,["And","you","can","also","adjust","the","maximum","number","of","lines","per","screen."," ","Neat,","right?"]
        ,{  textSpeed : 30
           ,linePause : 400
           ,maxRows : 2
           ,onFinishedTyping : function(){setTimeout(self.pageFour, 2000);}
        }
      );
    },

    pageFour : function pageFour() {
      self.el.vintageTxt('reset'
        ,["Not to mention the callbacks!","Oh, the callbacks!"," ","Watch what happens when I'm done typing..."]
        ,{ maxRows : 10
           ,onFinishedTyping : function(){setTimeout(self.spawnNew, 2000);} 
         }
      );
    },

    spawnNew : function spawnNew() {
      $('#miniTxt').vintageTxt({
        promptEnabled : false
        ,onFinishedTyping : function(){setTimeout(self.finalPage, 1000);}
      });
    },

    finalPage : function finalPage() {
      self.el.vintageTxt('reset'
        ,["So there you have it.","And plenty more features,","coming soon!","... in my imagination.","... so proabably never."," ","But never mind that.","Best to enjoy what you have,","and be greatful."," ","ttfn"]
        ,{  onFinishedTyping: null
           ,onEnterKey: null
           ,promptEnabled : true
         }
      );
    }

  }
  var self = VintageTxtTest;

  VintageTxtTest.go();

});
