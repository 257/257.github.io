$(function() {
  var VintageTxtTest = {
    
    el : $('#doThis'),
    
    go : function go() {
      this.el.vintageTxt({
         text : ["you asked for my resume? coming up..."]
        ,textSpeed: 15
        ,promptEnabled: false
        ,overlayImage : 'img/lostpcB.png'
        ,onFinishedTyping : this.intro
      });

    },

    intro : function intro() {
      var texts = [
        [
"EDUCATION\n",\
"BA with Distinction in Mathematics and Statistics (Graduated April 2014)\n",\
"Biology and Medical Sciences courses from University of Debrecen, Medical School\n"];

      self.el.vintageTxt('updateOptions', {
        textSpeed: 60
        ,onFinishedTyping : null
        ,onEnterKey : self.pageOne
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageOne : function pageOne(e, inputTxt) {
      var texts = [
        ["Did you see that, " + inputTxt + "?","It was an input prompt!","And it kinda, sorta works!"]
        ,["There's also cool features like..."]
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
