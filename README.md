# Installment & Market Check Logic Overview
# কিস্তি ও বাজার যাচাই - হিসাবের নিয়মাবলী

This document explains the mathematical formulas and logical conditions used behind the scenes in the **Installment & Market Check** application.

এই নথিতে **কিস্তি ও বাজার যাচাই** অ্যাপ্লিকেশনের পেছনের গাণিতিক সূত্র এবং যৌক্তিক শর্তাবলী ব্যাখ্যা করা হয়েছে।

---

## 1. Installment Calculation (কিস্তির পরিমাণ নির্ণয়)

The core formula determines how much the user has to pay per installment regardless of frequency.

**Formula / সূত্র:**
`Installment Amount = Total Repayment ÷ Number of Installments`
`কিস্তির পরিমাণ = মোট পরিশোধ ÷ কিস্তির সংখ্যা`

*Example (উদাহরণ):*
Total Repayment = 34,500 
Installment Count = 46 
`34,500 / 46 = 750 per installment`

---

## 2. Monthly Normalization (মাসিক হিসেবে রূপান্তর)

To accurately calculate the burden against a user's *Monthly Income*, all installment frequencies (Daily, Weekly) must be normalized to a standard monthly cost.

**Logic / হিসাব:**
*   **Weekly (সাপ্তাহিক):** `Installment × 4.33` 
    *(There are ~4.33 weeks in a standard month)*
    *(এক মাসে গড়ে ৪.৩৩ সপ্তাহ থাকে)*
*   **Daily (দৈনিক):** `Installment × 30`
*   **Monthly (মাসিক):** `Installment × 1`

*Example (উদাহরণ):*
Weekly Installment of 750
`750 × 4.33 = 3,247.50 Monthly Burden`

---

## 3. Daily Market Loss (দৈনিক বাজারের ক্ষতি)

This metric shows exactly how much money is missing from the user's pocket every single day due to the ongoing loan repayment. 

**Formula / সূত্র:**
`Daily Loss = Monthly Installment Burden ÷ 30`
`দৈনিক ক্ষতি = মাসিক কিস্তির বোঝা ÷ ৩০`

*Example (উদাহরণ):*
Monthly Burden = 3,247.50
`3,247.5 / 30 = ৳108 lost per day`

---

## 4. Final Evaluation Logic (চূড়ান্ত মূল্যায়ন শর্তাবলী)

The application evaluates whether the loan is safe or dangerous based on the **Debt-to-Income (DTI) Ratio** (কিস্তি-আয় অনুপাত).

**Formula / সূত্র:**
`Risk Ratio = (Monthly Installment Burden ÷ Monthly Income) × 100`

### Conditions (শর্তসমূহ):

*   🟢 **Tolerable (সহনশীল): Ratio ≤ 30%**
    *   **Logic:** The installment takes up 30% or less of the monthly income. 
    *   **Meaning:** This is considered globally safe. The user will likely not starve.
*   🟠 **Risky (ঝুঁকিপূর্ণ): Ratio 31% - 50%**
    *   **Logic:** The installment takes up between 31% and 50% of the monthly income.
    *   **Meaning:** The user will struggle. Market price hikes on essential goods will cause severe distress.
*   🔴 **Dangerous (বিপজ্জনক): Ratio > 50%**
    *   **Logic:** The installment consumes more than half of the user's monthly income.
    *   **Meaning:** This is a debt trap. The user cannot survive without taking another loan to pay off this one.

---

## 5. Loan Purpose Risk (ঋণের উদ্দেশ্যের ঝুঁকি)

Different loan reasons carry different inherent risks, independent of the math. The application assigns a base risk percentage to the purpose of the loan:

*   **Market/Medical/Agriculture (বাজার/চিকিৎসা/কৃষি): 10% - 30% Risk**
    *   *Reasoning:* Essential survival needs or income-generating activities.
*   **Education/Emergency (শিক্ষা/জরুরী): 20% Risk**
    *   *Reasoning:* Important long-term investments or unavoidable circumstances.
*   **Repair/Business (মেরামত/ব্যবসা): 15% - 25% Risk**
    *   *Reasoning:* Good if the business profits exceed the installment, but carries a moderate risk of failure.
*   **Social/Event/Marriage (সামাজিক/বিয়ে): 90% - 95% Risk**
    *   *Reasoning:* Highly dangerous. Non-productive debt taken for prestige.
*   **Paying Old Debt (পুরোনো ঋণ শোধ): 100% Risk**
    *   *Reasoning:* The definition of a severe debt cycle/trap. Guaranteed disaster without massive income increases.

***

### Technologies Used
*   Vanilla CSS (CSS Variables for Dark Mode, Flexbox, CSS Grid)
*   Vanilla JavaScript (DOM Manipulation, i18n Dictionary mapping)
*   HTML5 (Semantic structures)
*   FontAwesome (Icons)
