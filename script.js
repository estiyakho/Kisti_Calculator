document.addEventListener('DOMContentLoaded', () => {

    const i18n = {
        bn: {
            app_title: "কিস্তি ও বাজার যাচাই",
            app_subtitle: "খাবার কেনার পর এনজিও-র কিস্তি দেওয়ার ক্ষমতা আপনার আছে কি না দেখুন।",
            lang_toggle: "ENGLISH",
            currency_toggle: "DOLLAR",
            loan_details: "ঋণের বিবরণ",
            loan_purpose_lbl: "ঋণ কেন নিচ্ছেন?",
            p_market: "বাজার",
            p_education: "শিক্ষা",
            p_medical: "চিকিৎসা",
            p_emergency: "জরুরী",
            p_business: "ব্যবসা",
            p_agriculture: "কৃষি",
            p_social: "সামাজিক",
            p_event: "বিয়ে/অনুষ্ঠান",
            p_travel: "ভ্রমণ",
            p_repair: "মেরামত",
            p_pay_debt: "পুরোনো ঋণ",
            p_other: "অন্যান্য",
            risk_level: "ঝুঁকির মাত্রা",
            our_advice: "আমাদের পরামর্শ",
            
            adv_market: "উচ্চ ঝুঁকি (৮০%): প্রতিদিনের খাবারের জন্য কিস্তিতে ঋণ নেওয়া একটি বড় বিপদের লক্ষণ। আপনার দৈনন্দিন আয়ের চেয়ে ব্যয় বেশি হচ্ছে। এই ঋণ শোধ করতে গিয়ে ভবিষ্যতে খাবারের উপর আরও প্রভাব পড়তে পারে। অতি প্রয়োজন ছাড়া এই ঋণ নিবেন না।",
            adv_agriculture: "মাঝারি ঝুঁকি (৪০%): কৃষি কাজে প্রাকৃতিক ঝুঁকি থাকে। নিশ্চিত করুন যে আবহাওয়া বা ফসলের ক্ষতি হলেও কিস্তি দেওয়ার বিকল্প পথ আপনার কাছে আছে।",
            adv_education: "মাঝারি ঝুঁকি (৩০%): শিক্ষার জন্য ঋণ ভালো বিনিয়োগ, তবে এর ফল পেতে সময় লাগে। কিস্তি যেন আপনার বর্তমান দৈনন্দিন পড়াশোনার খরচ ও জীবনযাত্রাকে ব্যাহত না করে।",
            adv_medical: "জরুরী কিন্তু ঝুঁকিপূর্ণ (৫০%): চিকিৎসা জীবনের চেয়ে বড় নয়, তবে সুস্থ হওয়ার পর এই কিস্তি একটি দীর্ঘমেয়াদী বোঝা হয়ে দাঁড়ায়। দ্রুত সুস্থ হয়ে পুনরায় আয় শুরু করার উপর জোর দিন।",
            adv_emergency: "উচ্চ ঝুঁকি (৬০%): জরুরী অবস্থার ঋণগুলো সাধারণত পূর্বপরিকল্পনাহীন হয়। কিস্তি পরিশোধের জন্য আপনার নিয়মিত আয়ের বাইরে বিকল্প কোনো আয়ের উৎস আছে কিনা ভেবে দেখুন।",
            adv_business: "কম ঝুঁকি (২০%): ব্যবসার আয়ের জন্য ঋণ নেওয়া সবচেয়ে ভালো। তবে নিশ্চিত করুন যে ব্যবসার মাসিক মুনাফা আপনার কিস্তির টাকার চেয়ে উল্লেখযোগ্যভাবে বেশি হবে।",
            adv_event: "অত্যন্ত বিপজ্জনক (৯৫%): বিয়ে বা সামাজিক অনুষ্ঠানের জন্য ঋণ নেওয়া সম্পূর্ণ অনুৎপাদনশীল খাত। এটি আপনার আয় এক টাকাও বাড়াবে না, বরং কিস্তির চাপে আপনাকে পথে বসাতে পারে।",
            adv_travel: "অত্যন্ত বিপজ্জনক (১০০%): ভ্রমণ একটি বিলাসবহুল ব্যয়। ঋণ করে ভ্রমণ করা আর্থিক ভবিষ্যৎ সম্পূর্ণ ধ্বংস করতে পারে। এটি পরিহার করুন।",
            adv_social: "অত্যন্ত বিপজ্জনক (৯০%): সামাজিক সম্মান রক্ষার্থে ঋণ নিলে কিস্তি দেওয়া কঠিন হতে পারে। সম্মান বজায় রাখতে গিয়ে দীর্ঘমেয়াদী ঋণের ফাঁদে পড়া বুদ্ধিমানের কাজ নয়।",
            adv_repair: "মাঝারি ঝুঁকি (৩৫%): ঘর বা ব্যবসা মেরামতে ঋণ আয়ের নিরাপত্তা দেয়। তবে মেরামতের খরচ কিস্তির থেকে কতটুকু লাভজনক তা হিসাব করা প্রয়োজন।",
            adv_pay_debt: "সর্বোচ্চ বিপদ (১০০%): এক ঋণ শোধ করতে বেশি সুদে আরেকটি ঋণ নেওয়া হলো ঋণের ফাঁদ বা ডেট-ট্র্যাপ এর নিখুঁত উদাহরণ। এটি থেকে বের হওয়া প্রায় অসম্ভব।",
            adv_other: "উচ্চ সতর্কতা (৭০%): অজানা বা অপ্রয়োজনীয় খাতে ঋণ অত্যন্ত ঝুঁকিপূর্ণ। নিশ্চিত করুন এই টাকা এমন কিছুতে ব্যয় হচ্ছে যা আপনাকে আর্থিকভাবে লাভবান করবে।",
            
            cash_received: "নগদ গ্রহণ",
            monthly_income: "পরিবারের মাসিক আয়",
            installment_count: "কিস্তির সংখ্যা",
            how_often: "কত দিন পর?",
            freq_daily: "দৈনিক",
            freq_weekly: "সাপ্তাহিক",
            freq_monthly: "মাসিক",
            total_repayment: "মোট পরিশোধ",
            total_repayment_full: "সম্পূর্ণ পরিশোধ",
            
            your_installment: "আপনার কিস্তি",
            per_week: "প্রতি সপ্তাহ",
            per_month: "পুরো মাসের জন্য",
            per_day: "প্রতিদিন",
            daily_loss_lbl: "দৈনিক বাজারের ক্ষতি",
            daily: "প্রতিদিন",
            
            remaining_market: "বাজারের জন্য অবশিষ্ট টাকা",
            for_whole_month: "পুরো মাসের জন্য",
            ngo_takes: "এনজিও কিস্তি নেয় আয়ের",
            
            market_advice_title: "বাজার ও কিস্তি পরামর্শ",
            market_advice_content: "নিত্যপণ্যের দাম সাধারণত বাড়ে। ১০% দাম বাড়লে আপনি কি সামলাতে পারবেন?",
            
            final_eval: "চূড়ান্ত মূল্যায়ন",
            eval_tolerable: "সহনশীল কিস্তি",
            eval_tolerable_sub: "এই কিস্তি আপনার আয়ের সাথে সামঞ্জস্যপূর্ণ।",
            eval_caution: "সতর্কতামূলক কিস্তি",
            eval_caution_sub: "এই কিস্তি চালানো শুরু করলে আপনার অন্যান্য খরচ কমাতে হবে।",
            eval_risky: "ঝুঁকিপূর্ণ কিস্তি",
            eval_risky_sub: "এই কিস্তি দেওয়া আপনার জন্য কষ্টকর হতে পারে।",
            eval_danger: "বিপজ্জনক কিস্তি",
            eval_danger_sub: "এই কিস্তি আপনার আয়ের জন্য মারাত্মক হুমকিস্বরূপ।",
            eval_basis: "আপনার আয় এবং মোট পরিশোধের টাকার ভিত্তিতে।",
            
            hidden_calc: "লুকানো হিসাব (মুদ্রাস্ফীতি)",
            hidden_calc_sub: "মুদ্রাস্ফীতির আসল প্রভাব দেখুন",
            hidden_calc_content: "মুদ্রাস্ফীতির কারণে মূলত জিনিসের দাম বাড়ে। ঋণে এটি কেন ক্ষতিকর তা নিচে দেওয়া হলো:",
            inf_fixed_title: "নির্দিষ্ট আয়ের চাকরিজীবী:",
            inf_fixed_desc: "চাকরিজীবীদের জন্য মুদ্রাস্ফীতি সবচেয়ে ক্ষতিকর। জিনিসপত্রের দাম প্রতিদিন বাড়ে, কিন্তু বেতন বাড়ে বছরে একবার ও বাড়ে না। ফলে কিস্তির টাকা পাহাড় সমান মনে হয় এবং দৈনন্দিন বাজার খরচ চালানো অসম্ভব হয়ে পড়ে। ঋণের চেয়ে ব্যয় কমানোর দিকে নজর দিন।",
            inf_biz_title: "ব্যবসায়ী:",
            inf_biz_desc: "ব্যবসায়ীরা মুদ্রাস্ফীতির সময় পণ্যের দাম বাড়িয়ে কিছুটা টিকে থাকতে পারেন। তবে ক্রেতার ক্রয়ক্ষমতা কমে গেলে ব্যবসাও ক্ষতির মুখে পড়ে। তাই ঋণের টাকায় ব্যবসা করতে হলে নিশ্চিত হতে হবে মুনাফার হার কিস্তির চেয়ে অনেক বেশি।"
        },
        en: {
            app_title: "Installment & Market Check",
            app_subtitle: "Check if you can afford NGO installments after buying daily groceries.",
            lang_toggle: "বাংলা",
            currency_toggle: "TAKA",
            loan_details: "Loan Details",
            loan_purpose_lbl: "Why are you taking the loan?",
            p_market: "Market",
            p_education: "Education",
            p_medical: "Medical",
            p_emergency: "Emergency",
            p_business: "Business",
            p_agriculture: "Agriculture",
            p_social: "Social",
            p_event: "Event/Marriage",
            p_travel: "Travel",
            p_repair: "Repair",
            p_pay_debt: "Old Debt",
            p_other: "Other",
            risk_level: "Risk Level",
            our_advice: "Our Advice",
            
            adv_market: "High Risk (80%): Taking a loan for daily groceries is a dangerous red flag. It means your basic living expenses exceed your regular income. Paying this back will only reduce your future food budget further. Avoid if possible.",
            adv_agriculture: "Moderate Risk (40%): Agriculture relies on weather and market elements. Ensure you have backup funds or alternative ways to pay the installment if a crop completely fails.",
            adv_education: "Moderate Risk (30%): A good long-term investment, but degrees take years to generate money. Make sure the heavy monthly installments do not crush your daily living standards today.",
            adv_medical: "Urgent but Risky (50%): Without health, there is nothing. However, remember this installment will become a brutal burden once you heal. Prioritize returning to work to cover these costs.",
            adv_emergency: "High Risk (60%): Unplanned loans for sudden emergencies are stressful. You must immediately calculate how to squeeze this new, heavy installment out of your current strict budget.",
            adv_business: "Low Risk (20%): Productive debt is the smartest choice. But mathematically ensure your expected business profit will consistently be much higher than your installment amount.",
            adv_event: "Extremely Dangerous (95%): Loans for marriages or parties are completely non-productive. They do not increase your income by a single penny, leaving you in severe debt just for social prestige.",
            adv_travel: "Extremely Dangerous (100%): Travel is a luxury. Financing a vacation with high-interest NGO loans is a guaranteed path to destroying your financial future. Strictly avoid.",
            adv_social: "Extremely Dangerous (90%): Taking high-interest loans to maintain a 'status' in society is a huge mistake. The social prestige will fade, but the crushing debt trap will remain for years.",
            adv_repair: "Moderate Risk (35%): Necessary for safety or business continuity. Just ensure the amount borrowed strictly matches the required repair material and isn't wasted.",
            adv_pay_debt: "Maximum Danger (100%): Taking a new, high-interest loan to pay off an old loan is the literal definition of a 'Debt Trap'. You will almost never escape this cycle without a massive income spike.",
            adv_other: "High Warning (70%): Loans for undefined purposes are universally risky. If this money is going toward consumer goods (like a TV or phone), it is a terrible financial decision.",
            
            cash_received: "Cash Received",
            monthly_income: "Family Monthly Income",
            installment_count: "Number of Installments",
            how_often: "How often?",
            freq_daily: "Daily",
            freq_weekly: "Weekly",
            freq_monthly: "Monthly",
            total_repayment: "Total Repayment",
            total_repayment_full: "Full Repayment",
            
            your_installment: "Your Installment",
            per_week: "Per Week",
            per_month: "For the whole month",
            per_day: "Per Day",
            daily_loss_lbl: "Daily Market Loss",
            daily: "Daily",
            
            remaining_market: "Money Left for Market",
            for_whole_month: "For the whole month",
            ngo_takes: "NGO Installment Takes",
            
            market_advice_title: "Market & Installment Advice",
            market_advice_content: "Daily commodities usually rise in price. Can you handle a 10% price jump?",
            
            final_eval: "Final Evaluation",
            eval_tolerable: "Tolerable Installment",
            eval_tolerable_sub: "This installment matches well with your income limit.",
            eval_caution: "Cautionary Installment",
            eval_caution_sub: "Paying this will require you to actively cut other expenses.",
            eval_risky: "Risky Installment",
            eval_risky_sub: "Paying this installment will likely be a struggle.",
            eval_danger: "Dangerous Installment",
            eval_danger_sub: "This installment is a severe threat to your daily survival.",
            eval_basis: "Based exclusively on your total income and repayment.",
            
            hidden_calc: "Hidden Math (Inflation)",
            hidden_calc_sub: "See the real impact of inflation",
            hidden_calc_content: "Inflation makes everything more expensive over time. Here is why taking a loan during high inflation is dangerous:",
            inf_fixed_title: "Fixed Salary Earners:",
            inf_fixed_desc: "Inflation is devastating for salary earners. The price of groceries and transport goes up daily, but your salary remains the exact same. This makes the static loan installment feel heavier every month, crushing your ability to survive. Focus on cutting expenses, not taking loans.",
            inf_biz_title: "Business Owners:",
            inf_biz_desc: "Businesses can sometimes survive inflation by raising their prices. However, if customers stop buying because they have no money, the business will fail entirely. A business loan is only safe if you are 100% sure your profit margins will outpace both the NGO interest and national inflation."
        }
    };

    // State Default
    let currentLang = 'bn';
    let currentCurrency = 'BDT'; // BDT or USD
    let isDark = false;

    // Inputs
    const monthlyIncomeEl = document.getElementById('monthly_income');
    const installmentInputEl = document.getElementById('installment_input');
    const installmentCountEl = document.getElementById('installment_count');
    const frequencyEl = document.getElementById('frequency');

    // Outputs
    const totalRepaymentDisplayEl = document.getElementById('total_repayment_display');
    const frequencyTextEl = document.getElementById('installment_frequency_text');
    const dailyLossEl = document.getElementById('daily_loss');
    const remainingAmtEl = document.getElementById('remaining_amount');
    const ngoProgressEl = document.getElementById('ngo_progress');
    const ngoRatioTextEl = document.getElementById('ngo_ratio_text');

    // Advice / Evaluation Box
    const adviceTextEl = document.getElementById('purpose_advice_text');
    const importanceScoreEl = document.getElementById('importance_score');
    const importanceBarEl = document.getElementById('importance_bar');
    
    const evalBoxEl = document.getElementById('evaluation_box');
    const evalIconCircleEl = document.getElementById('eval_icon_circle');
    const evalIconEl = document.getElementById('eval_icon');
    const evalHeadingEl = document.getElementById('eval_heading');
    const evalSubheadingEl = document.getElementById('eval_subheading');

    // Actions
    const btnLang = document.getElementById('btn_lang');
    const btnCurrency = document.getElementById('btn_currency');
    const btnTheme = document.getElementById('btn_theme');
    
    const langText = document.getElementById('lang_text');
    const currencyText = document.getElementById('currency_text');
    const themeIcon = document.getElementById('theme_icon');
    
    // Hidden Calc
    const hiddenCalcBox = document.getElementById('hidden_calc_box');
    const hiddenCalcContent = document.getElementById('hidden_calc_content');
    const hiddenCalcIcon = document.getElementById('hidden_calc_icon');

    // Format Number Helper
    function formatMoney(amount) {
        if (currentLang === 'bn') {
             // using en-IN locale gets perfect comma separation for BD systems
            let formatted = Math.round(amount).toLocaleString('en-IN'); 
            return (currentCurrency === 'BDT' ? '৳' : '$') + formatted;
        } else {
            let formatted = Math.round(amount).toLocaleString('en-US'); 
            return (currentCurrency === 'BDT' ? '৳' : '$') + formatted;
        }
    }

    // Locale Updater
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang] && i18n[currentLang][key] !== undefined) {
                el.innerText = i18n[currentLang][key];
            }
        });
        
        langText.innerText = i18n[currentLang].lang_toggle;
        currencyText.innerText = i18n[currentLang].currency_toggle;
        
        // Ensure inputs show correct currency symbol locally
        document.querySelectorAll('.currency-symbol').forEach(symb => {
             if(symb.innerHTML.includes('hashtag')) return; // skip the # symbol
             symb.innerText = currentCurrency === 'BDT' ? '৳' : '$';
        });

        // Trigger recalculate immediately to fix translated dynamic texts
        calculate();
    }

    // Toggle Handlers
    btnLang.addEventListener('click', () => {
        currentLang = currentLang === 'bn' ? 'en' : 'bn';
        document.documentElement.lang = currentLang;
        applyTranslations();
    });

    btnCurrency.addEventListener('click', () => {
        currentCurrency = currentCurrency === 'BDT' ? 'USD' : 'BDT';
        // Toggle the button text translated equivalent
        applyTranslations(); 
    });

    btnTheme.addEventListener('click', () => {
        isDark = !isDark;
        if (isDark) {
            document.body.classList.add('dark-theme');
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            document.body.classList.remove('dark-theme');
            themeIcon.className = 'fa-solid fa-moon';
        }
    });
    
    hiddenCalcBox.addEventListener('click', () => {
        if(hiddenCalcContent.style.display === 'none'){
            hiddenCalcContent.style.display = 'block';
            hiddenCalcIcon.className = 'fa-solid fa-chevron-up';
        } else {
            hiddenCalcContent.style.display = 'none';
            hiddenCalcIcon.className = 'fa-solid fa-chevron-down';
        }
    });

    // Purpose Buttons Select Logic
    const purposeBtns = document.querySelectorAll('.purpose-btn');
    const purposeScores = {
        business: { score: "20%", pct: "20%", i18nKey: "adv_business" },
        education: { score: "30%", pct: "30%", i18nKey: "adv_education" },
        repair: { score: "35%", pct: "35%", i18nKey: "adv_repair" },
        agriculture: { score: "40%", pct: "40%", i18nKey: "adv_agriculture" },
        medical: { score: "50%", pct: "50%", i18nKey: "adv_medical" },
        emergency: { score: "60%", pct: "60%", i18nKey: "adv_emergency" },
        other: { score: "70%", pct: "70%", i18nKey: "adv_other" },
        market: { score: "80%", pct: "80%", i18nKey: "adv_market" },
        social: { score: "90%", pct: "90%", i18nKey: "adv_social" },
        event: { score: "95%", pct: "95%", i18nKey: "adv_event" },
        travel: { score: "100%", pct: "100%", i18nKey: "adv_travel" },
        pay_debt: { score: "100%", pct: "100%", i18nKey: "adv_pay_debt" }
    };

    purposeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            purposeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const pType = btn.getAttribute('data-purpose');
            const pData = purposeScores[pType];
            
            importanceScoreEl.innerText = pData.score;
            importanceBarEl.style.width = pData.pct;
            
            // Set dynamic localization
            adviceTextEl.setAttribute('data-i18n', pData.i18nKey);
            adviceTextEl.innerText = i18n[currentLang][pData.i18nKey];
            
            // Make the risk bar red
            importanceBarEl.style.backgroundColor = 'var(--red-base)';
        });
    });

    // Main Calculator Logic
    function calculate() {
        const income = parseFloat(monthlyIncomeEl.value) || 0;
        const installmentInput = parseFloat(installmentInputEl.value) || 0;
        const count = parseFloat(installmentCountEl.value) || 1;
        const freq = frequencyEl.value;

        if (count === 0) return;

        // 1. Calculate total repayment amount
        const totalRepayment = installmentInput * count;

        // 2. Convert to monthly for comparison
        let monthlyInstallment = 0;

        if (freq === 'weekly') {
            monthlyInstallment = installmentInput * 4.33; 
        } else if (freq === 'monthly') {
            monthlyInstallment = installmentInput;
        } else if (freq === 'daily') {
            monthlyInstallment = installmentInput * 30;
        }

        // 3. Calculate metrics
        const remaining = income - monthlyInstallment;
        const dailyLoss = monthlyInstallment / 30; 
        
        let ratio = 0;
        if (income > 0) {
            ratio = (monthlyInstallment / income) * 100;
        }

        // 4. Update DOM Outputs
        totalRepaymentDisplayEl.innerText = formatMoney(totalRepayment);
        
        // Re-apply localization for Frequency
        frequencyTextEl.setAttribute('data-i18n', 'total_repayment_full');
        frequencyTextEl.innerText = i18n[currentLang]['total_repayment_full'];
        
        dailyLossEl.innerText = formatMoney(dailyLoss);
        remainingAmtEl.innerText = formatMoney(remaining);
        
        const ratioRounded = Math.round(ratio);
        ngoProgressEl.style.width = Math.min(ratioRounded, 100) + '%';
        ngoRatioTextEl.innerText = ratioRounded + '%';

        // 5. Update Evaluation Box Design based on Ratio
        if (ratioRounded <= 20) {
            // Tolerable
            evalBoxEl.style.backgroundColor = 'var(--green-bg)';
            evalBoxEl.style.borderColor = 'var(--green-border)';
            evalIconCircleEl.style.color = 'var(--green-base)';
            evalHeadingEl.style.color = 'var(--green-base)';
            evalSubheadingEl.style.color = 'var(--green-base)';
            
            evalIconEl.className = 'fa-solid fa-check';
            
            evalHeadingEl.setAttribute('data-i18n', 'eval_tolerable');
            evalHeadingEl.innerText = i18n[currentLang].eval_tolerable;
            
            evalSubheadingEl.setAttribute('data-i18n', 'eval_tolerable_sub');
            evalSubheadingEl.innerText = i18n[currentLang].eval_tolerable_sub;
            
            ngoProgressEl.style.backgroundColor = 'var(--green-base)';
        } else if (ratioRounded <= 30) {
            // Caution
            evalBoxEl.style.backgroundColor = 'var(--orange-bg)';
            evalBoxEl.style.borderColor = 'var(--orange-border)';
            evalIconCircleEl.style.color = 'var(--orange-base)';
            evalHeadingEl.style.color = 'var(--orange-base)';
            evalSubheadingEl.style.color = 'var(--orange-base)';
            
            evalIconEl.className = 'fa-solid fa-triangle-exclamation';
            
            evalHeadingEl.setAttribute('data-i18n', 'eval_caution');
            evalHeadingEl.innerText = i18n[currentLang].eval_caution;
            
            evalSubheadingEl.setAttribute('data-i18n', 'eval_caution_sub');
            evalSubheadingEl.innerText = i18n[currentLang].eval_caution_sub;

            ngoProgressEl.style.backgroundColor = 'var(--orange-base)';
        } else if (ratioRounded <= 50) {
            // Risky
            evalBoxEl.style.backgroundColor = 'var(--orange-bg)';
            evalBoxEl.style.borderColor = 'var(--orange-border)';
            // Make risky slightly darker/redder if desired, but we'll use orange base and icon difference
            evalIconCircleEl.style.color = 'var(--orange-base)';
            evalHeadingEl.style.color = 'var(--orange-base)';
            evalSubheadingEl.style.color = 'var(--orange-base)';
            
            evalIconEl.className = 'fa-solid fa-exclamation';
            
            evalHeadingEl.setAttribute('data-i18n', 'eval_risky');
            evalHeadingEl.innerText = i18n[currentLang].eval_risky;
            
            evalSubheadingEl.setAttribute('data-i18n', 'eval_risky_sub');
            evalSubheadingEl.innerText = i18n[currentLang].eval_risky_sub;

            ngoProgressEl.style.backgroundColor = 'var(--orange-base)';
        } else {
            // Dangerous
            evalBoxEl.style.backgroundColor = 'var(--red-bg)';
            evalBoxEl.style.borderColor = 'var(--red-border)';
            evalIconCircleEl.style.color = 'var(--red-base)';
            evalHeadingEl.style.color = 'var(--red-base)';
            evalSubheadingEl.style.color = 'var(--red-base)';
            
            evalIconEl.className = 'fa-solid fa-xmark';
            
            evalHeadingEl.setAttribute('data-i18n', 'eval_danger');
            evalHeadingEl.innerText = i18n[currentLang].eval_danger;
            
            evalSubheadingEl.setAttribute('data-i18n', 'eval_danger_sub');
            evalSubheadingEl.innerText = i18n[currentLang].eval_danger_sub;
            
            ngoProgressEl.style.backgroundColor = 'var(--red-base)';
        }
    }

    // Attach listeners
    [monthlyIncomeEl, installmentInputEl, installmentCountEl, frequencyEl].forEach(input => {
        // Calculate when user presses 'Enter'
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                calculate();
                input.blur(); // Hide keyboard on mobile
            }
        });
        // Also calculate when user finishes editing and clicks away
        input.addEventListener('change', calculate);
    });

    // Initial Bootstrap
    applyTranslations();
});
