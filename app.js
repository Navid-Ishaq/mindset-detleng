const copy={en:{eyebrow:'A new beginning starts within',title:'Change your thinking.<br><em>Change your life.</em>',lede:'Your thoughts shape the direction of your life. This is your invitation to pause, awaken, and choose a more courageous way forward.',cta:'Begin your journey',note:'A quiet place for meaningful change',badge:'Awaken',label:'The journey inward',sectionTitle:'Every transformation begins with a thought.',sectionText:'Read slowly. Let the words meet you where you are. Within these pages, you may find a question you have been avoiding, a strength you forgot, or the first small step toward the life you truly want to live.',cardText:'Your inner world is not a prison. It is a starting point.',readEyebrow:'The complete reading',readTitle:'A mind opened is a life expanded.',readMeta:'Read at your own pace',closingEyebrow:'The next chapter is yours',closingTitle:'You do not need a new life.<br><em>You need a new lens.</em>',closingCta:'Return to the beginning'},ur:{eyebrow:'ایک نئی شروعات اندر سے جنم لیتی ہے',title:'اپنی سوچ بدلو۔<br><em>اپنی زندگی بدلو۔</em>',lede:'آپ کے خیالات آپ کی زندگی کی سمت طے کرتے ہیں۔ یہ دعوت ہے کہ رکیں، بیدار ہوں اور آگے بڑھنے کا ایک زیادہ بہادر راستہ منتخب کریں۔',cta:'اپنا سفر شروع کریں',note:'بامعنی تبدیلی کے لیے ایک پُرسکون جگہ',badge:'بیداری',label:'اندر کی طرف سفر',sectionTitle:'ہر تبدیلی ایک خیال سے شروع ہوتی ہے۔',sectionText:'آہستہ پڑھیں۔ ان الفاظ کو وہاں آپ سے ملنے دیں جہاں آپ آج کھڑے ہیں۔ ان صفحات میں شاید آپ کو کوئی ایسا سوال ملے جس سے آپ بچتے رہے ہیں، کوئی بھولی ہوئی طاقت ملے، یا اس زندگی کی طرف پہلا چھوٹا قدم ملے جسے آپ واقعی جینا چاہتے ہیں۔',cardText:'آپ کی اندرونی دنیا قید خانہ نہیں۔ یہ ایک نقطۂ آغاز ہے۔',readEyebrow:'مکمل مطالعہ',readTitle:'کھلا ہوا ذہن، وسیع تر زندگی۔',readMeta:'اپنی رفتار سے پڑھیں',closingEyebrow:'اگلا باب آپ کا ہے',closingTitle:'آپ کو نئی زندگی کی ضرورت نہیں۔<br><em>آپ کو ایک نئی نظر کی ضرورت ہے۔</em>',closingCta:'ابتدا کی طرف واپس جائیں'}};
let lang='en';const content=document.querySelector('#content');function render(next){lang=next;document.documentElement.lang=lang==='ur'?'ur':'en';document.body.classList.toggle('rtl',lang==='ur');document.querySelectorAll('[data-copy]').forEach(el=>{el.innerHTML=copy[lang][el.dataset.copy]||''});document.querySelectorAll('.lang-btn').forEach(b=>{const on=b.dataset.lang===lang;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});document.querySelector('#hero-image').src=lang==='ur'?'assets/hero-ur.png':'assets/hero-en.png';document.querySelector('#hero-image').alt=lang==='ur'?'روشنی کی طرف بڑھتا ہوا شخص':'A person walking towards light at dawn';content.innerHTML=window.MINDSET_CONTENT[lang].map(p=>`<p>${p}</p>`).join('');document.querySelector('#paragraph-count').textContent=lang==='ur'?`${window.MINDSET_CONTENT.ur.length} حصے`:`${window.MINDSET_CONTENT.en.length} reflections`}document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>render(b.dataset.lang)));render('en');
(()=>{const s=document.createElement('style');s.textContent=".rtl .reading-content p:first-child:first-letter{float:none;font:inherit;padding:0;color:inherit}\n.rtl .reading-content>p{font-size:clamp(21px,2vw,25px);line-height:2;margin-bottom:18px;scroll-margin-top:32px}\n.rtl .ur-source-heading{font-family:'Noto Naskh Arabic',serif;font-weight:700;font-size:clamp(29px,3.4vw,42px);line-height:1.65;color:#253b63;margin:35px 0 16px;scroll-margin-top:32px}\n.rtl .ur-milestone{--accent:#96451c;position:relative;isolation:isolate;background:linear-gradient(125deg,#fff2bc,#ffe0a6 55%,#ffd2bf);border:1px solid #eec48b;border-radius:28px;padding:clamp(24px,4vw,44px);margin:32px 0 38px;box-shadow:0 16px 42px #a4612224,inset 0 1px 0 #fff;color:#23334d;overflow:hidden}\n.rtl .ur-milestone:before{content:'';position:absolute;z-index:-1;inset:-70px auto auto -65px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,#ffffffb3,transparent 70%);pointer-events:none}\n.rtl .tone-1{--accent:#12665e;background:linear-gradient(125deg,#ddfaf4,#b8eee5 60%,#dcf3ff);border-color:#95d8cf}\n.rtl .tone-2{--accent:#663693;background:linear-gradient(125deg,#f6eaff,#e6d2ff 60%,#fce1ed);border-color:#cfb1eb}\n.rtl .tone-3{--accent:#9b3940;background:linear-gradient(125deg,#fff0d1,#ffd3c2 60%,#ffdfeb);border-color:#edb0a1}\n.rtl .milestone-kicker{font-size:16px;font-weight:700;color:var(--accent);display:flex;align-items:center;gap:12px}\n.rtl .milestone-star{font-size:30px;line-height:1;filter:drop-shadow(0 2px 8px #fff)}\n.rtl .ur-milestone h3{font-family:'Noto Naskh Arabic',serif;font-size:clamp(32px,4vw,49px);font-weight:700;line-height:1.6;margin:12px 0 8px;color:#172e4d;text-shadow:0 1px 0 #ffffff80}\n.rtl .ur-milestone p{font-size:clamp(20px,2vw,24px);line-height:1.85;margin:0;color:#2a3d59}\n.rtl .milestone-action{background:#ffffff9e;border:1px solid #ffffffbf;border-radius:16px;margin-top:22px;padding:16px 22px}\n.rtl .milestone-action strong{font-size:18px;color:var(--accent)}\n.rtl .milestone-controls{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin-top:25px}\n.rtl .milestone-commit{font-family:inherit;font-size:18px;font-weight:700;line-height:1.7;padding:12px 22px;border:0;border-radius:14px;background:#203c5b;color:white;cursor:pointer;min-height:48px;box-shadow:0 6px 15px #203c5b20;transition:background .2s}\n.rtl .milestone-commit[aria-pressed=true]{background:#176257}\n.rtl .milestone-next{font-size:19px;font-weight:700;color:#243f63;padding:10px 3px;text-underline-offset:6px;min-height:48px}\n.rtl .milestone-track{margin-top:26px;height:5px;border-radius:10px;overflow:hidden;background:#ffffffb3;direction:rtl}\n.rtl .milestone-track span{display:block;height:100%;background:var(--accent);border-radius:10px}\n.rtl .milestone-controls :focus-visible{outline:3px solid #243f63;outline-offset:5px}\n@media(max-width:600px){.rtl .milestone-controls{align-items:stretch;flex-direction:column}.rtl .milestone-commit{width:100%}.rtl .ur-milestone{border-radius:22px}.rtl .reading-meta{white-space:normal}.rtl .milestone-action{padding:14px 16px}}\n@media(prefers-reduced-motion:reduce){.rtl .milestone-commit{transition:none}}";document.head.append(s);})();
(() => {
const steps=[
['اپنی صلاحیت کو پہچانو','تمہاری کہانی میں ابھی بہت کچھ باقی ہے۔ آگے اپنی اندرونی طاقت پہچانو۔','اپنی ایک صلاحیت یاد کرو جسے نکھارنا چاہتے ہو۔','اپنی طاقت دریافت کرو'],
['آج کی صبح تمہاری ہے','صلاحیت پہچان لی؟ اب اسے نئی سمت دینے کا وقت ہے۔','آج کے لیے ایک چھوٹا، واضح فیصلہ منتخب کرو۔','نئی سمت کی طرف بڑھو'],
['فیصلے سے راستہ بنتا ہے','ایک درست فیصلہ تمہیں آگے لے جا سکتا ہے۔ اب خوف کو نئے زاویے سے دیکھو۔','کون سی پرانی عادت کے بجائے بہتر انتخاب کر سکتے ہو؟','خوف کے پار دیکھو'],
['خوف کے ساتھ بھی قدم اٹھاؤ','ہمت کا آغاز اسی لمحے ہو سکتا ہے۔ آگے دیکھو کہ عمل کیسے اعتماد پیدا کرتا ہے۔','اپنے خوف کے باوجود ممکن ایک چھوٹا قدم سوچو۔','پہلا قدم پہچانو'],
['تم اب بھی سیکھ سکتے ہو','قدم اٹھانے کی ہمت، سیکھنے کی طاقت بن سکتی ہے۔','ایک نئی چیز منتخب کرو جسے آج دس منٹ دے سکتے ہو۔','سیکھنے کی روشنی بڑھاؤ'],
['علم کو زندگی میں اتارو','سمجھ بڑھ رہی ہے۔ اب اسے اپنے تجربوں کی طاقت سے جوڑو۔','آج سیکھی ہوئی ایک بات کہاں استعمال کر سکتے ہو؟','اپنے تجربے کی طاقت دیکھو'],
['تمہاری کہانی روشنی بن سکتی ہے','اپنی گہرائی کو پہچانو۔ اگلی منزل اس طاقت کو مقصد سے جوڑتی ہے۔','اپنے ایک تجربے سے حاصل ہونے والا سبق یاد کرو۔','مقصد کی طرف بڑھو'],
['مقصد ایک عمل سے شروع ہوتا ہے','ایک انسان کی مشکل آسان کرنا بامعنی سفر کی ابتدا بن سکتا ہے۔','تم آج کس شخص کی ایک مشکل آسان کر سکتے ہو؟','اپنی صلاحیت کو خدمت بناؤ'],
['جو جانتے ہو، اسے بانٹو','تمہارا علم کسی اور کے لیے فائدہ بن سکتا ہے۔ آگے اپنی اصل قدر پہچانو۔','ایک مفید بات منتخب کرو جو کسی کو سکھا سکتے ہو۔','اپنی اصل قدر پہچانو'],
['تمہاری قدر تمہارے اندر ہے','کردار اور ہمدردی تمہاری طاقت ہیں۔ اسے روزمرہ عمل میں بڑھاؤ۔','اپنی ایک خوبی یاد کرو جسے کوئی تنخواہ نہیں ناپ سکتی۔','قوت کو تسلسل دو'],
['جوش سے آگے، مستقل قدم','اب مقصد کو ایک عادت کا سہارا دو۔ اگلا حصہ مسلسل چلنے کی دعوت دیتا ہے۔','اپنے مقصد کے لیے روز کا ایک قابلِ عمل وقت منتخب کرو۔','اپنی عادت بناؤ'],
['چھوٹے قدم، بڑھتی ہوئی طاقت','تسلسل راستہ بناتا ہے۔ اس راستے پر اپنی سوچ کی حفاظت بھی کرو۔','کل دوبارہ کرنے کے لیے ایک چھوٹا کام طے کرو۔','اپنی سوچ کی حفاظت کرو'],
['اپنے اندر مہربان آواز جگاؤ','تمہاری اپنی آواز تمہارا سہارا بن سکتی ہے۔ اگلی سطروں کو اپنے لیے پڑھو۔','کہو: میں سیکھ سکتا ہوں، میں پھر آغاز کر سکتا ہوں۔','اپنے اگلے باب کی طرف بڑھو'],
['اگلا باب تمہارے اختیار میں ہے','ماضی سے سیکھ کر آج ایک نئی تعمیر شروع کر سکتے ہو۔','ایک انتخاب سوچو جس پر کل تمہیں فخر ہو۔','اپنے مستقبل کو جگہ دو'],
['تمہاری منزل ابھی باقی ہے','سیکھنے سے تعمیر، تعمیر سے دوسروں کو ہمت: سفر آگے بڑھ سکتا ہے۔','تمہارے بڑھنے سے کس دوسرے انسان کو فائدہ ہوگا؟','معنی کی طرف بڑھو'],
['کامل ہونے سے پہلے بامقصد بنو','اب مطالعے کی روشنی کو زندگی کے ایک حقیقی عمل میں لے جاؤ۔','آج سیکھنے، خدمت یا صحت کے لیے ایک عمل منتخب کرو۔','آخری پیغام دل سے پڑھو'],
['اب روشنی آگے بڑھاؤ','تمہارا منتخب چھوٹا عمل اس سفر کو زندگی میں جاری رکھ سکتا ہے۔','پہلا قدم آج اٹھاؤ، اور کل اسے دوبارہ موقع دو۔','اپنے عزم کو تازہ کرو']
];
const headings=new Set([0,3,7,13,18,24,28,38,42,47,55,60]);
const commitments=new Set();
function decorate(){
 if(document.documentElement.lang!=='ur')return;
 const article=document.getElementById('content');
 if(article.querySelector('.ur-milestone'))return;
 const source=[...article.querySelectorAll(':scope > p')];
 if(source.length!==70)return;
 source.forEach((p,i)=>{
  p.id=`ur-reading-${i}`;p.dataset.sourceIndex=i;
  if(headings.has(i)){
   const h=document.createElement(i===0?'h2':'h3');
   h.textContent=p.textContent;h.className='ur-source-heading';h.id=p.id;h.dataset.sourceIndex=i;p.replaceWith(h);
  }
 });
 steps.forEach(([title,message,action,cta],n)=>{
  const after=n===16?69:(n+1)*4-1;
  const card=document.createElement('section');
  card.className=`ur-milestone tone-${n%4}`;card.setAttribute('aria-labelledby',`ur-milestone-title-${n}`);
  card.innerHTML=`<div class="milestone-kicker"><span aria-hidden="true" class="milestone-star">✦</span> روشن منزل ${new Intl.NumberFormat('ur-u-nu-arabext').format(n+1)} / ۱۷</div><h3 id="ur-milestone-title-${n}">${title}</h3><p>${message}</p><div class="milestone-action"><strong>اب ایک چھوٹا عمل</strong><p>${action}</p></div><div class="milestone-controls"><button type="button" aria-pressed="${commitments.has(n)}" class="milestone-commit">${commitments.has(n)?'عزم منتخب ہو گیا — اب آگے بڑھو ✓':'یہ قدم میرا عزم ہے ✓'}</button><a class="milestone-next" href="#${n===16?'journey':`ur-reading-${after+1}`}">${cta} <span aria-hidden="true">←</span></a></div><div class="milestone-track" aria-hidden="true"><span style="width:${(n+1)/17*100}%"></span></div>`;
  card.querySelector('button').addEventListener('click',e=>{
   const b=e.currentTarget;const on=b.getAttribute('aria-pressed')!=='true';
   b.setAttribute('aria-pressed',String(on));if(on)commitments.add(n);else commitments.delete(n);
   b.textContent=on?'عزم منتخب ہو گیا — اب آگے بڑھو ✓':'یہ قدم میرا عزم ہے ✓';
  });
  article.querySelector(`[data-source-index="${after}"]`).after(card);
 });
 article.querySelectorAll('.milestone-next').forEach(link=>link.addEventListener('click',()=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
 }));
}
new MutationObserver(decorate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
decorate();
})();

