 // getting textarea elemen
 var textarea_latin = document.getElementById("latin");
    
 // getting paste button
 var pasteButton = document.getElementById("paste");

 // adding event listener for paste button
 pasteButton.addEventListener("click", function() {
   pasteText();
 });

 // Function for paste
 function pasteText() {
   // getting text copied on clipboard
   navigator.clipboard.readText()
     .then(function(text) {
       // adding text into textarea
       textarea_latin.value += text;
     })
     .catch(function(error) {
       console.error('Gagal melakukan paste:', error);
     });
 }

 // getting textarea elemen 
 var textarea_pegon = document.getElementById("pegon");

 // getting copy button
 var copyButton = document.getElementById("copy");

 // adding event listener for copy button
 copyButton.addEventListener("click", function() {
 copyText();
 });

 // Function for copy
 function copyText() {
     // copying text from textarea
     textarea_pegon.select();
     textarea_pegon.setSelectionRange(0, textarea_pegon.value.length);
     document.execCommand("copy");
 }

 function clearTextarea() {
     textarea_latin.value = "";
     textarea_pegon.value = "";
 }

 function lock_Textarea() {
     document.getElementById("pegon").readOnly = true;
 }

 function replaceText() {
     var textarea_latin = document.getElementById("latin");
     var textarea_pegon = document.getElementById("pegon");
     var text1 = textarea_latin.value;
     var replacedText = text1.toLowerCase()

     /*words*/
     .replace(/ilmu/g, "علم")
     .replace(/fiqih/g, "فقه")
     .replace(/nahwu/g, "نحو")
     .replace(/tauhid/g, "توحيد")
     .replace(/akhlaq/g, "أخلاق")
     .replace(/Allah/g, "الله")
     .replace(/muhammad/g, "محمّد")
     .replace(/waktu/g, "وقت")
     .replace(/mushonnif/g, "مصنّف")
     .replace(/sifat/g, "صفة")
     .replace(/wajib/g, "واجب")
     .replace(/haram/g, "حرام")
     .replace(/makruh/g, "مكروه")
     .replace(/mubah/g, "مباح")
     .replace(/sunnah/g, "سنة")
     .replace(/fardhu/g, "فرض")
     .replace(/syair/g, "شعر")
     .replace(/dalil/g, "دليل")
     .replace(/jaiz/g, "جائز")
     .replace(/mustahil/g, "مستحيل")
     .replace(/sholat/g, "صلاة")
     .replace(/zakat/g, "زكاة")
     .replace(/haji/g, "حج")
     .replace(/umum/g, "عموم")
     .replace(/khusus/g, "خصوص")
     .replace(/akad/g, "عقد")
     .replace(/aqoidul/g, "عقائد ال")
     .replace(/khomsin/g, "خمسين")

     /*abjad*/
     .replace(/ a/g, " "+"أ")
     .replace(/ i/g, " "+"إ")
     .replace(/ u/g, " "+"أو")
     .replace(/ e/g, " "+"أي")
     .replace(/ o/g, " "+"أو")
     .replace(/ny/g, "ۑ")
     .replace(/ng/g, "ڠ")
     .replace(/\?/g, "؟")
     .replace(/a/g, "ا")
     .replace(/b/g, "ب")
     .replace(/c/g, "چ")
     .replace(/d/g, "د")
     .replace(/e/g, "ي")
     .replace(/f/g, "ف")
     .replace(/g/g, "ڮ")
     .replace(/h/g, "ه")
     .replace(/i/g, "ي")
     .replace(/j/g, "ج")
     .replace(/k/g, "ك")
     .replace(/l/g, "ل")
     .replace(/m/g, "م")
     .replace(/n/g, "ن")
     .replace(/o/g, "و")
     .replace(/p/g, "ف")
     .replace(/q/g, "ق")
     .replace(/r/g, "ر")
     .replace(/s/g, "س")
     .replace(/t/g, "ت")
     .replace(/u/g, "و")
     .replace(/v/g, "ف")
     .replace(/w/g, "و")
     .replace(/x/g, "ڭ")
     .replace(/y/g, "ي")
     .replace(/z/g, "ز")

     /*number*/
     .replace(/1/g, "١")
     .replace(/2/g, "٢")
     .replace(/3/g, "٣")
     .replace(/4/g, "٤")
     .replace(/5/g, "٥")
     .replace(/6/g, "٦")
     .replace(/7/g, "٧")
     .replace(/8/g, "٨")
     .replace(/9/g, "٩")
     .replace(/0/g, "٠");

     textarea_pegon.value = replacedText;
 }