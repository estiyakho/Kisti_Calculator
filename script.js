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
            
            adv_market: "অবশ্যই প্রয়োজন: এটি জীবন রক্ষা বা ভবিষ্যতের জন্য। কিস্তি ম্যানেজ করার চেষ্টা করুন।",
            adv_agriculture: "আয়বর্ধক: কৃষি কাজে ঝুঁকি থাকে। ফসল বা খামারের আয়ের সাথে কিস্তির মিল রাখুন।",
            adv_education: "দীর্ঘমেয়াদী বিনিয়োগ: শিক্ষার জন্য ঋণ ভালো, তবে কিস্তি যেন পড়াশোনার খরচ না কমায়।",
            adv_medical: "অত্যন্ত জরুরী: চিকিৎসার বিকল্প নেই, তবে দ্রুত সুস্থ হয়ে আয়ের দিকে নজর দিন।",
            adv_emergency: "জরুরী অবস্থা: কিস্তি পরিশোধের জন্য বিকল্প আয়ের উৎস ভেবে রাখুন।",
            adv_business: "আয়বর্ধক: ব্যবসার আয় কিস্তির চেয়ে বেশি হলে এটি ভালো সিদ্ধান্ত।",
            adv_event: "ঝুঁকিপূর্ণ: অনুৎপাদনশীল খাতে ঋণ নেওয়া বিপদের কারণ হতে পারে। আয় না বাড়লে কিস্তি দেওয়া কঠিন।",
            adv_travel: "বিপজ্জনক: ভ্রমণ একটি বিলাসবহুল ব্যয়। ঋণ করে ভ্রমণ করা আর্থিক ভবিষ্যৎ নষ্ট করতে পারে।",
            adv_social: "ঝুঁকিপূর্ণ: সামাজিক সম্মান রক্ষার্থে ঋণ নিলে কিস্তি দেওয়া কঠিন হতে পারে।",
            adv_repair: "প্রয়োজনীয়: ঘর বা ব্যবসা মেরামতে ঋণ আয়ের নিরাপত্তা দেয়।",
            adv_pay_debt: "বিপজ্জনক: এক ঋণ শোধ করতে আরেক ঋণ নিলে ঋণের ফাঁদে পড়ার সম্ভাবনা বেশি।",
            adv_other: "সতর্কতা: অজানা খাতে ঋণ অনেক ঝুঁকিপূর্ণ হতে পারে। নিশ্চিত করুন এর আয় কিস্তির চেয়ে বেশি হবে।",
            
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
            eval_risky: "ঝুঁকিপূর্ণ কিস্তি",
            eval_risky_sub: "এই কিস্তি দেওয়া আপনার জন্য কষ্টকর হতে পারে।",
            eval_danger: "বিপজ্জনক কিস্তি",
            eval_danger_sub: "এই কিস্তি আপনার আয়ের জন্য মারাত্মক হুমকিস্বরূপ।",
            eval_basis: "আপনার আয় এবং মোট পরিশোধের টাকার ভিত্তিতে।",
            
            hidden_calc: "লুকানো হিসাব (মুদ্রাস্ফীতি)",
            hidden_calc_sub: "মুদ্রাস্ফীতির হিসাব দেখুন",
            hidden_calc_content: "মুদ্রাস্ফীতির কারণে আপনার ঋণের আসল বোঝা কতটুকু কমছে। সাধারণ ৩-৫% মুদ্রাস্ফীতি থাকলে আপনার আসল ঋণের মান সময়ের সাথে কমে যায়, কিন্তু এনজিও সাধারণত বেশি সুদ নেয় যা এটি পুষিয়ে দেয়।"
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
            
            adv_market: "Absolutely Necessary: Food is life-saving. Try your best to manage the installment.",
            adv_agriculture: "Income Generating: Agriculture has risks. Ensure crop yields can cover the installments.",
            adv_education: "Long Term: Good investment, but ensure it doesn't hurt daily living expenses.",
            adv_medical: "Highly Urgent: No alternative to health. Focus on recovering and earning.",
            adv_emergency: "Emergency: Think of alternate income sources to cover this immediate burden.",
            adv_business: "Income Generating: Good choice ONLY if business profits exceed the installment.",
            adv_event: "Risky: Loans for non-productive events can lead to debt traps without increasing income.",
            adv_travel: "Dangerous: Travel is a luxury expense. Taking a loan for travel can severely damage your financial future.",
            adv_social: "Risky: Taking loans for social prestige often leads to severe trap later.",
            adv_repair: "Necessary: Repairing home or shop secures your future foundation.",
            adv_pay_debt: "Dangerous: Taking a new loan to pay off an old one frequently leads to a severe debt cycle.",
            adv_other: "Warning: Loans for undefined purposes are highly risky. Ensure it generates more income than the installment.",
            
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
            eval_risky: "Risky Installment",
            eval_risky_sub: "Paying this installment will likely be a struggle.",
            eval_danger: "Dangerous Installment",
            eval_danger_sub: "This installment is a severe threat to your daily survival.",
            eval_basis: "Based exclusively on your total income and repayment.",
            
            hidden_calc: "Hidden Calculation (Inflation)",
            hidden_calc_sub: "View inflation logic",
            hidden_calc_content: "Inflation reduces the actual load of your debt over time. With standard 3-5% inflation, the real value of cash drops, but NGO interest rates usually outpace it anyway."
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
        market: { score: "10%", pct: "10%", i18nKey: "adv_market" },
        education: { score: "20%", pct: "20%", i18nKey: "adv_education" },
        medical: { score: "10%", pct: "10%", i18nKey: "adv_medical" },
        emergency: { score: "20%", pct: "20%", i18nKey: "adv_emergency" },
        business: { score: "15%", pct: "15%", i18nKey: "adv_business" },
        agriculture: { score: "30%", pct: "30%", i18nKey: "adv_agriculture" },
        social: { score: "90%", pct: "90%", i18nKey: "adv_social" },
        event: { score: "95%", pct: "95%", i18nKey: "adv_event" },
        travel: { score: "100%", pct: "100%", i18nKey: "adv_travel" },
        repair: { score: "25%", pct: "25%", i18nKey: "adv_repair" },
        pay_debt: { score: "100%", pct: "100%", i18nKey: "adv_pay_debt" },
        other: { score: "50%", pct: "50%", i18nKey: "adv_other" }
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
        if (ratioRounded <= 30) {
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
        } else if (ratioRounded <= 50) {
            // Risky
            evalBoxEl.style.backgroundColor = 'var(--orange-bg)';
            evalBoxEl.style.borderColor = 'var(--orange-border)';
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
        input.addEventListener('input', calculate);
        input.addEventListener('change', calculate);
    });

    // Initial Bootstrap
    applyTranslations();
});
