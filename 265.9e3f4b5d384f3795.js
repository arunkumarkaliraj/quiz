"use strict";(self.webpackChunkuserManagementProj=self.webpackChunkuserManagementProj||[]).push([[265],{4265:(D,m,i)=>{i.r(m),i.d(m,{QuizModule:()=>c});var d=i(6895),h=i(3870),g=i(3555),C=i(7445),t=i(4650),T=i(1110),p=i(3546),f=i(4859);class l{constructor(o,e){this.el=o,this.render=e,this.isCorrect=!1}answer(){this.isCorrect?(this.render.setStyle(this.el.nativeElement,"background","green"),this.render.setStyle(this.el.nativeElement,"color","#fff"),this.render.setStyle(this.el.nativeElement,"border","2px solid grey")):(this.render.setStyle(this.el.nativeElement,"background","red"),this.render.setStyle(this.el.nativeElement,"color","#fff"),this.render.setStyle(this.el.nativeElement,"border","2px solid grey"))}}function M(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"mat-card")(2,"mat-card-title"),t._uU(3,"Welcome To The World Of Quiz!!"),t.qZA(),t.TgZ(4,"mat-card-content"),t._UZ(5,"img",2),t.qZA(),t.TgZ(6,"div",3)(7,"button",4),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.quizStart())}),t._uU(8,"Start Quiz"),t.qZA()()()()}}function w(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ol")(1,"li",26),t.NdJ("click",function(){const v=t.CHM(e).$implicit,_=t.oxw(3);return t.KtG(_.answer(_.currentQuestion+1,v))}),t.TgZ(2,"div",27)(3,"div",28)(4,"div",29)(5,"b"),t._uU(6),t.qZA()()()()()()}if(2&n){const e=o.$implicit;t.xp6(4),t.Q6J("isCorrect",e.correct),t.xp6(2),t.Oqu(e.text)}}l.\u0275fac=function(o){return new(o||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275dir=t.lG2({type:l,selectors:[["","appChangeBg",""]],hostBindings:function(o,e){1&o&&t.NdJ("click",function(){return e.answer()})},inputs:{isCorrect:"isCorrect"}});const Q=function(n){return{width:n}};function y(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"div",13)(3,"h5"),t._uU(4),t.qZA()(),t.TgZ(5,"div",14)(6,"span",15),t._uU(7),t.qZA()(),t.TgZ(8,"div",16)(9,"h5"),t._uU(10),t.qZA()()(),t.TgZ(11,"div",17),t._UZ(12,"div",18),t.qZA(),t.TgZ(13,"div",19)(14,"h3"),t._uU(15),t.qZA()(),t.TgZ(16,"div",20),t.YNc(17,w,7,2,"ol",21),t.qZA(),t.TgZ(18,"div",22)(19,"div",23)(20,"button",24),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.previousQuestion())}),t._uU(21,"Previous"),t.qZA(),t.TgZ(22,"button",25),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.resetQuiz())}),t._uU(23,"Reset"),t.qZA(),t.TgZ(24,"button",25),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.nextQuestion())}),t._uU(25,"Next"),t.qZA()()(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(4),t.hij("",e.points," Points"),t.xp6(3),t.AsE("Question ",e.currentQuestion+1," of ",e.questionList.length,""),t.xp6(3),t.hij("",e.counter," sec \u23f1"),t.xp6(2),t.Q6J("ngStyle",t.VKq(8,Q,e.progress+"%")),t.xp6(3),t.Oqu(null==e.questionList[e.currentQuestion]?null:e.questionList[e.currentQuestion].questionText),t.xp6(2),t.Q6J("ngForOf",null==e.questionList[e.currentQuestion]?null:e.questionList[e.currentQuestion].options),t.xp6(3),t.Q6J("disabled",0===e.currentQuestion)}}function Z(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",30),t._UZ(2,"img",31),t.TgZ(3,"div",32)(4,"h1"),t._uU(5,"Congratulations!! "),t._UZ(6,"br"),t._uU(7,"You have completed the quiz. "),t._UZ(8,"br"),t._uU(9,"Below is your result:"),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA(),t.TgZ(14,"p"),t._uU(15),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA()()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(11),t.hij("Total Question Attempted : ",e.questionList.length," "),t.xp6(2),t.hij("Total Correct Answered : ",e.correctAnswer," "),t.xp6(2),t.hij("Total Wrong Answered : ",e.inCorrectAnswer," "),t.xp6(2),t.hij("Your Score : ",e.points," Points ")}}function z(n,o){if(1&n&&(t.TgZ(0,"div",1)(1,"mat-card")(2,"mat-card-content")(3,"div",5)(4,"div",6)(5,"div",7)(6,"div",8)(7,"h4",9),t._uU(8,"Started The Quiz!!"),t.qZA(),t.TgZ(9,"span",10),t._uU(10,"Welcome To The Angular Quiz Competition!!"),t.qZA()()(),t.YNc(11,y,26,10,"ng-container",11),t.YNc(12,Z,18,4,"ng-container",11),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(11),t.Q6J("ngIf",!e.isQuizCompleted),t.xp6(1),t.Q6J("ngIf",e.isQuizCompleted)}}class u{quizStart(){this.hidden=!1,this.hidden1=!0}constructor(o){this.questionService=o,this.hidden=!0,this.hidden1=!1,this.name="",this.isCorrect=!1,this.questionList=[],this.currentQuestion=0,this.points=0,this.counter=60,this.correctAnswer=0,this.inCorrectAnswer=0,this.progress="0",this.isQuizCompleted=!1,this.done=["Get up","Brush teeth","Take a shower","Check e-mail","Walk dog"]}ngOnInit(){this.name=localStorage.getItem("name"),this.getAllQuestions(),this.startCounter()}getAllQuestions(){this.questionService.getQuestionJson().subscribe(o=>{this.questionList=o.questions})}nextQuestion(){this.currentQuestion++}previousQuestion(){this.currentQuestion--}answer(o,e){o===this.questionList.length&&(this.isQuizCompleted=!0,this.stopCounter()),e.correct?(this.points+=10,this.correctAnswer++,setTimeout(()=>{this.currentQuestion++,this.resetCounter(),this.getProgressPercent()},1e3)):(setTimeout(()=>{this.currentQuestion++,this.inCorrectAnswer++,this.resetCounter(),this.getProgressPercent()},1e3),this.points-=10)}startCounter(){this.interval$=(0,C.F)(1e3).subscribe(o=>{this.counter--,0===this.counter&&(this.currentQuestion++,this.counter=60,this.points-=10)}),setTimeout(()=>{this.interval$.unsubscribe()},6e5)}stopCounter(){this.interval$.unsubscribe(),this.counter=0}resetCounter(){this.stopCounter(),this.counter=60,this.startCounter()}resetQuiz(){this.resetCounter(),this.getAllQuestions(),this.points=0,this.counter=60,this.currentQuestion=0,this.progress="0"}getProgressPercent(){return this.progress=(this.currentQuestion/this.questionList.length*100).toString(),this.progress}drop(o){(0,g.bA)(this.questionList,o.previousIndex,o.currentIndex)}}u.\u0275fac=function(o){return new(o||u)(t.Y36(T.P))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-quiz"]],decls:3,vars:2,consts:[["class","container",4,"ngIf"],[1,"container"],["src","../../assets/Quiz Time Image.jpg","alt",""],[1,"button"],["mat-raised-button","","color","primary","type","submit","mat-button","",3,"click"],[1,"container","mt-5","display-flex"],[1,"card"],[1,"d-flex","justify-content-between","p-3"],[1,"quiz-header"],[2,"font-family","'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"],[2,"font-style","bold"],[4,"ngIf"],[1,"d-flex","justify-content-around","py-3"],[1,"score"],[1,"question-remain"],[2,"font-style","normal"],[1,"timer"],[1,"progress","mb-3"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","bg-success",3,"ngStyle"],[1,"question"],[1,"options"],[4,"ngFor","ngForOf"],[1,"button","bn"],[1,"d-flex","justify-content-between"],["mat-raised-button","","color","primary",1,"btn",3,"disabled","click"],["mat-raised-button","","color","primary",1,"btn",3,"click"],[3,"click"],["cdkDrag","",1,"example-box"],[1,"example-list"],["appChangeBg","",1,"card","example-box",3,"isCorrect"],[1,"row","d-flex","justify-content-between"],["src","https://icon-library.com/images/celebration-icon-png/celebration-icon-png-7.jpg","alt","",1,"img-fluid","col-sm-12","mx-auto",2,"width","50%"],[1,"result","text-center","col-md-6","col-sm-12"]],template:function(o,e){1&o&&(t.YNc(0,M,9,0,"div",0),t._UZ(1,"br"),t.YNc(2,z,13,2,"div",0)),2&o&&(t.Q6J("ngIf",e.hidden),t.xp6(2),t.Q6J("ngIf",e.hidden1))},dependencies:[d.sg,d.O5,d.PC,p.a8,p.dn,p.n5,f.lW,g.Zt,l],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%;background-color:#008b8b}.example-full-width[_ngcontent-%COMP%]{width:100%;background-color:#5f9ea0}[_nghost-%COMP%]{display:flex;justify-content:center;margin:100px 0}.login_form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#20b2aa}.bn[_ngcontent-%COMP%]{padding:15px}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:center}.example-container[_ngcontent-%COMP%]{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:60px;background:white;border-radius:4px;overflow:hidden;display:block}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.imgss[_ngcontent-%COMP%]{z-index:100000000000000000000000000000000000000000000000000000000000000000000000000000}.example-box[_ngcontent-%COMP%]{width:120px;height:120px;border:solid 1px #ccc;color:#000000de;cursor:move;display:inline-flex;justify-content:center;align-items:center;text-align:center;background:#fff;margin-right:25px;position:relative;z-index:1;border-radius:15px;transition:box-shadow .2s cubic-bezier(0,0,.2,1);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.example-box[_ngcontent-%COMP%]:active{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}"]});const A=[{path:"",component:u}];class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(A),h.Bz]});var P=i(245),O=i(529),j=i(5717),U=i(5938),q=i(7392),k=i(8255),R=i(7009),B=i(4144),x=i(4006),b=i(3238);let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[b.BQ],b.BQ]}),n})();class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[d.ez,a,B.c,p.QW,x.u5,x.UX,f.ot,P.lN,O.JF,j.p0,U.Is,q.Ps,k.Tx,R.ZX,g._t,S]})}}]);