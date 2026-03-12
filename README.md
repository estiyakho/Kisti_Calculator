# Installment & Market Check Logic Overview
# কিস্তি ও বাজার যাচাই - হিসাবের নিয়মাবলী

This document explains the mathematical formulas and logical conditions used behind the scenes in the **Installment & Market Check** application.

এই নথিতে **কিস্তি ও বাজার যাচাই** অ্যাপ্লিকেশনের পেছনের গাণিতিক সূত্র এবং যৌক্তিক শর্তাবলী ব্যাখ্যা করা হয়েছে।

---

## 1. Total Repayment Calculation (মোট পরিশোধ নির্ণয়)

The core formula determines the total expected cost by multiplying the user's base installment by the duration count.

**Formula / সূত্র:**
`Total Repayment = Installment Amount × Number of Installments`
`মোট পরিশোধ = কিস্তির পরিমাণ × কিস্তির সংখ্যা`

*Example (উদাহরণ):*
Installment Amount = 750 
Installment Count = 46 
`750 × 46 = 34,500 Total Repayment`

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

*   🟢 **Tolerable (সহনশীল): Ratio ≤ 20%**
    *   **Logic:** The installment takes up 20% or less of the monthly income. 
    *   **Meaning:** This is considered globally safe. The user will be able to manage this comfortably.
*   🟠 **Cautionary (সতর্কতামূলক): Ratio 21% - 30%**
    *   **Logic:** The installment takes up between 21% and 30% of the monthly income.
    *   **Meaning:** The user will need to actively cut other expenses to afford this safely.
*   🟠 **Risky (ঝুঁকিপূর্ণ): Ratio 31% - 50%**
    *   **Logic:** The installment takes up between 31% and 50% of the monthly income.
    *   **Meaning:** The user will struggle heavily. Market price hikes on essential goods will cause severe distress.
*   🔴 **Dangerous (বিপজ্জনক): Ratio > 50%**
    *   **Logic:** The installment consumes more than half of the user's monthly income.
    *   **Meaning:** This is a guaranteed debt trap. The user cannot survive without taking another loan to pay off this one.

---

## 5. Loan Purpose Risk (ঋণের উদ্দেশ্যের ঝুঁকি)

Different loan reasons carry different inherent risks. The application assigns a base risk percentage to the purpose of the loan, aiming for a highly conservative model that discourages taking high-interest loans for anything other than absolute necessities or guaranteed income-generating assets:

*   **Business (ব্যবসা): 20% Risk (Low)**
    *   *Reasoning:* Productive debt. Good if the business profits consistently exceed the installment.
*   **Education (শিক্ষা): 30% Risk (Moderate)**
    *   *Reasoning:* Good long-term investment, but degrees take years to generate money. Causes short-term strain.
*   **Repair (মেরামত): 35% Risk (Moderate)**
    *   *Reasoning:* Necessary for safety or business continuity, but strict budgeting is needed.
*   **Agriculture (কৃষি): 40% Risk (Moderate)**
    *   *Reasoning:* Income-generating but highly reliant on uncontrollable factors like weather.
*   **Medical (চিকিৎসা): 50% Risk (Urgent but Risky)**
    *   *Reasoning:* No alternative to health, but paying the installment becomes a brutal burden during recovery.
*   **Emergency (জরুরী): 60% Risk (High)**
    *   *Reasoning:* Unplanned loans without alternate income sources stretch strict budgets to their breaking points.
*   **Other (অন্যান্য): 70% Risk (High Warning)**
    *   *Reasoning:* Loans for undefined purposes or consumer goods are universally terrible financial decisions.
*   **Market/Grocery (বাজার): 80% Risk (High Warning)**
    *   *Reasoning:* Taking a loan for daily consumables is a massive red flag. It means daily expenses have exceeded income, and paying this back will reduce future food budgets further.
*   **Social/Event/Marriage (সামাজিক/বিয়ে/অনুষ্ঠান): 90% - 95% Risk (Extremely Dangerous)**
    *   *Reasoning:* Completely non-productive debt taken merely for social prestige. It generates zero income.
*   **Travel (ভ্রমণ): 100% Risk (Extremely Dangerous)**
    *   *Reasoning:* Financing a luxury vacation with a high-interest NGO loan guarantees financial destruction.
*   **Paying Old Debt (পুরোনো ঋণ শোধ): 100% Risk (Maximum Danger)**
    *   *Reasoning:* The literal definition of a severe 'Debt Cycle' or 'Debt Trap'.

***

### Technologies Used
*   Vanilla CSS (CSS Variables for Dark Mode, Flexbox, CSS Grid)
*   Vanilla JavaScript (DOM Manipulation, i18n Dictionary mapping)
*   HTML5 (Semantic structures)
*   FontAwesome (Icons)
