export type QuizCategory = {
  id: string;
  name: string;
  description: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  choices: [string, string, string, string];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
};

export type Quiz = {
  id: string;
  title: string;
  category: string;
  topic: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questions: QuizQuestion[];
};

/*
  HOW TO EDIT THIS FILE

  This file is the premade quiz bank for Accounting Made Simple.
  Later, AI-generated quizzes can use the same Quiz shape:

  {
    id,
    title,
    category,
    topic,
    description,
    difficulty,
    questions
  }

  Each question uses:

  {
    id,
    question,
    choices,
    correctAnswer,
    explanation
  }

  IDs should be short, unique, and lowercase-with-dashes.
*/

const q = (
  id: string,
  question: string,
  choices: [string, string, string, string],
  correctAnswer: QuizQuestion["correctAnswer"],
  explanation: string
): QuizQuestion => ({ id, question, choices, correctAnswer, explanation });

// HOW TO ADD A NEW CATEGORY:
// Add one new object to this categories array.
// The category name should match the quiz.category value used below.
export const categories: QuizCategory[] = [
  {
    id: "financial-accounting",
    name: "Financial Accounting",
    description: "Practice debits, credits, journal entries, statements, and core accounting concepts."
  },
  {
    id: "managerial-accounting",
    name: "Managerial Accounting",
    description: "Review internal business tools like costs, contribution margin, budgeting, and decisions."
  },
  {
    id: "excel-basics",
    name: "Excel Basics",
    description: "Build confidence with formulas, formatting, and accounting-friendly spreadsheet habits."
  },
  {
    id: "personal-finance-basics",
    name: "Personal Finance Basics",
    description: "Practice everyday money topics like budgeting, saving, credit, interest, and financial goals."
  },
  {
    id: "quickbooks-bookkeeping-basics",
    name: "QuickBooks / Bookkeeping Basics",
    description: "Review bookkeeping workflows, transactions, invoices, bills, bank feeds, and simple reports."
  }
];

// HOW TO ADD A NEW QUIZ:
// Add one new object to this quizzes array.
// Make sure it has id, title, category, topic, description, difficulty, and questions.
// The category should exactly match one of the category names above.
export const quizzes: Quiz[] = [
  {
    id: "accounting-equation-basics",
    title: "Accounting Equation Basics",
    category: "Financial Accounting",
    topic: "Accounting Equation Basics",
    description: "Practice assets, liabilities, equity, and how transactions affect the accounting equation.",
    difficulty: "Beginner",
    questions: [
      q("ae-001", "What is the basic accounting equation?", ["Assets = Liabilities + Equity", "Assets = Revenue - Expenses", "Liabilities = Assets + Equity", "Equity = Revenue + Cash"], "A", "The basic accounting equation is Assets = Liabilities + Equity."),
      q("ae-002", "A company buys equipment for cash. What happens to total assets?", ["Total assets increase", "Total assets decrease", "Total assets stay the same", "Total liabilities increase"], "C", "One asset increases, equipment, and another asset decreases, cash, so total assets stay the same."),
      q("ae-003", "If a business borrows $5,000 cash from a bank, what happens?", ["Assets increase and liabilities increase", "Assets decrease and equity decreases", "Liabilities decrease and equity increases", "Assets increase and revenue increases"], "A", "Cash increases assets, and the loan creates a liability the business must repay."),
      q("ae-004", "Owner investment usually increases which part of the accounting equation?", ["Liabilities", "Equity", "Expenses", "Contra assets"], "B", "Owner investment increases equity because the owner's claim on the business increases."),
      q("ae-005", "If assets are $20,000 and liabilities are $8,000, what is equity?", ["$8,000", "$12,000", "$20,000", "$28,000"], "B", "Equity equals assets minus liabilities: $20,000 - $8,000 = $12,000."),
      q("ae-006", "Paying off a loan with cash affects the accounting equation how?", ["Assets decrease and liabilities decrease", "Assets increase and liabilities increase", "Assets decrease and equity increases", "Liabilities increase and equity decreases"], "A", "Cash decreases assets, and the loan balance decreases liabilities."),
      q("ae-007", "Which account is an asset?", ["Accounts Payable", "Owner's Capital", "Cash", "Service Revenue"], "C", "Cash is an asset because it is a resource owned by the business.")
    ]
  },
  {
    id: "debits-and-credits",
    title: "Debits and Credits",
    category: "Financial Accounting",
    topic: "Debits and Credits",
    description: "Learn the normal balance rules for assets, liabilities, equity, revenue, and expenses.",
    difficulty: "Beginner",
    questions: [
      q("dc-001", "Which side increases an asset account?", ["Debit", "Credit", "Both sides equally", "Neither side"], "A", "Assets increase with debits and normally have debit balances."),
      q("dc-002", "Which side increases a liability account?", ["Debit", "Credit", "Left side only", "Neither side"], "B", "Liabilities increase with credits and normally have credit balances."),
      q("dc-003", "Revenue accounts normally have what balance?", ["Debit", "Credit", "Zero only", "Asset"], "B", "Revenue increases equity, and revenue accounts normally have credit balances."),
      q("dc-004", "Expense accounts usually increase with which side?", ["Debit", "Credit", "Both debit and credit", "No entry is needed"], "A", "Expenses decrease equity, and expense accounts increase with debits."),
      q("dc-005", "If Cash is credited, what usually happened to Cash?", ["Cash increased", "Cash decreased", "Cash became revenue", "Cash became equity"], "B", "Cash is an asset, and assets decrease with credits."),
      q("dc-006", "Which account normally has a credit balance?", ["Rent Expense", "Accounts Payable", "Cash", "Supplies"], "B", "Accounts Payable is a liability, and liabilities normally have credit balances."),
      q("dc-007", "In every journal entry, total debits should equal what?", ["Total credits", "Total assets", "Net income", "Total expenses"], "A", "Debits must equal credits to keep the accounting equation balanced.")
    ]
  },
  {
    id: "journal-entries",
    title: "Journal Entries",
    category: "Financial Accounting",
    topic: "Journal Entries",
    description: "Practice recording common beginner business transactions using debits and credits.",
    difficulty: "Beginner",
    questions: [
      q("je-001", "A business receives $1,000 cash from its owner as an investment. What is the correct journal entry?", ["Debit Cash $1,000; Credit Owner's Capital $1,000", "Debit Owner's Capital $1,000; Credit Cash $1,000", "Debit Revenue $1,000; Credit Cash $1,000", "Debit Cash $1,000; Credit Accounts Payable $1,000"], "A", "Cash increases with a debit. Owner's Capital increases equity, so it is credited."),
      q("je-002", "A company buys office supplies for $300 cash. Which entry records the purchase?", ["Debit Cash $300; Credit Supplies $300", "Debit Supplies $300; Credit Cash $300", "Debit Supplies Expense $300; Credit Accounts Payable $300", "Debit Accounts Receivable $300; Credit Supplies $300"], "B", "Supplies are an asset and increase with a debit. Cash decreases with a credit."),
      q("je-003", "A company performs $750 of services for a customer on account. What is the entry?", ["Debit Cash $750; Credit Service Revenue $750", "Debit Service Revenue $750; Credit Accounts Receivable $750", "Debit Accounts Receivable $750; Credit Service Revenue $750", "Debit Accounts Payable $750; Credit Service Revenue $750"], "C", "On account means the customer will pay later, so Accounts Receivable is debited and revenue is credited."),
      q("je-004", "A business pays $500 cash for rent for the current month. What entry should be recorded?", ["Debit Rent Expense $500; Credit Cash $500", "Debit Cash $500; Credit Rent Expense $500", "Debit Prepaid Rent $500; Credit Cash $500", "Debit Accounts Payable $500; Credit Cash $500"], "A", "Rent for the current month is an expense, and cash decreases when paid."),
      q("je-005", "A company receives a $200 utility bill but will pay it next month. What is the correct entry now?", ["Debit Utilities Expense $200; Credit Cash $200", "Debit Utilities Expense $200; Credit Accounts Payable $200", "Debit Accounts Payable $200; Credit Utilities Expense $200", "Debit Cash $200; Credit Utilities Expense $200"], "B", "The expense has been incurred, and Accounts Payable is credited because it will be paid later."),
      q("je-006", "A customer pays $400 cash on account. Which entry is correct?", ["Debit Cash $400; Credit Accounts Receivable $400", "Debit Accounts Receivable $400; Credit Cash $400", "Debit Cash $400; Credit Service Revenue $400", "Debit Accounts Payable $400; Credit Cash $400"], "A", "Cash increases, and Accounts Receivable decreases because the customer paid an amount owed."),
      q("je-007", "A business pays $250 owed to a supplier. Which entry is correct?", ["Debit Supplies $250; Credit Cash $250", "Debit Cash $250; Credit Accounts Payable $250", "Debit Accounts Payable $250; Credit Cash $250", "Debit Accounts Receivable $250; Credit Cash $250"], "C", "Paying a supplier reduces Accounts Payable with a debit and reduces Cash with a credit.")
    ]
  },
  {
    id: "adjusting-entries",
    title: "Adjusting Entries",
    category: "Financial Accounting",
    topic: "Adjusting Entries",
    description: "Review common end-of-period adjustments for accruals, deferrals, supplies, and depreciation.",
    difficulty: "Beginner",
    questions: [
      q("adj-001", "Why are adjusting entries recorded?", ["To update accounts before financial statements are prepared", "To erase all revenue accounts permanently", "To replace journal entries during the month", "To avoid using the accrual basis"], "A", "Adjusting entries update accounts so financial statements reflect the correct period."),
      q("adj-002", "A company used $120 of supplies during the month. What account should be debited?", ["Supplies", "Supplies Expense", "Cash", "Accounts Payable"], "B", "Used supplies become an expense, so Supplies Expense is debited."),
      q("adj-003", "Unearned revenue becomes revenue when what happens?", ["Cash is received", "The service is performed", "The customer is billed", "The month begins"], "B", "Unearned revenue is a liability until the business earns it by performing the service."),
      q("adj-004", "Which adjusting entry records wages earned by employees but not yet paid?", ["Debit Wages Expense; Credit Wages Payable", "Debit Wages Payable; Credit Wages Expense", "Debit Cash; Credit Wages Expense", "Debit Prepaid Wages; Credit Cash"], "A", "The wages are an expense now, and the unpaid amount is a liability."),
      q("adj-005", "Depreciation is used to allocate the cost of what type of asset?", ["Cash", "Accounts Receivable", "Long-term fixed asset", "Accounts Payable"], "C", "Depreciation spreads the cost of long-term assets over the periods they help generate revenue."),
      q("adj-006", "Prepaid insurance is initially an asset. As time passes, what account is usually debited?", ["Insurance Expense", "Cash", "Insurance Revenue", "Accounts Receivable"], "A", "As the prepaid coverage is used, it becomes Insurance Expense."),
      q("adj-007", "Interest earned but not yet received should usually be recorded as what?", ["Debit Interest Receivable; Credit Interest Revenue", "Debit Cash; Credit Interest Receivable", "Debit Interest Expense; Credit Cash", "Debit Interest Revenue; Credit Interest Payable"], "A", "The business earned revenue and has a receivable because cash has not been collected yet.")
    ]
  },
  {
    id: "financial-statements",
    title: "Financial Statements",
    category: "Financial Accounting",
    topic: "Financial Statements",
    description: "Learn what the main financial statements show and how they connect.",
    difficulty: "Beginner",
    questions: [
      q("fs-001", "Which financial statement reports revenues and expenses for a period of time?", ["Balance Sheet", "Income Statement", "Statement of Cash Flows", "Trial Balance"], "B", "The income statement reports revenues, expenses, and net income or net loss."),
      q("fs-002", "Which statement reports assets, liabilities, and equity on a specific date?", ["Income Statement", "Balance Sheet", "Statement of Retained Earnings", "Sales Report"], "B", "The balance sheet shows what the business owns, owes, and has in equity."),
      q("fs-003", "If revenues are greater than expenses, the business has what result?", ["Net loss", "Net income", "Owner withdrawal", "Unearned revenue"], "B", "Net income occurs when revenues are higher than expenses."),
      q("fs-004", "Which account normally appears on the balance sheet?", ["Rent Expense", "Service Revenue", "Cash", "Utilities Expense"], "C", "Cash is an asset, and assets appear on the balance sheet."),
      q("fs-005", "Which statement helps explain changes in cash during a period?", ["Income Statement", "Statement of Cash Flows", "Chart of Accounts", "Bank Deposit Slip"], "B", "The statement of cash flows explains cash inflows and outflows."),
      q("fs-006", "Which financial statement is usually prepared first?", ["Income Statement", "Balance Sheet", "Statement of Cash Flows", "Statement of Owner Withdrawals"], "A", "The income statement is usually prepared first because net income is needed for equity statements."),
      q("fs-007", "Where would Accounts Payable usually appear?", ["Income Statement as revenue", "Balance Sheet as a liability", "Balance Sheet as an asset", "Income Statement as an expense"], "B", "Accounts Payable is a liability because the business owes money to others.")
    ]
  },
  {
    id: "managerial-accounting-basics",
    title: "Managerial Accounting Basics",
    category: "Managerial Accounting",
    topic: "Managerial Accounting Basics",
    description: "Understand how managerial accounting helps businesses plan, control, and make decisions.",
    difficulty: "Beginner",
    questions: [
      q("mab-001", "Who mainly uses managerial accounting information?", ["Internal managers", "Only the IRS", "Only stockholders", "Only banks"], "A", "Managerial accounting is mainly used by internal managers to make business decisions."),
      q("mab-002", "Managerial accounting is often used for what purpose?", ["Planning and decision-making", "Preparing personal tax returns only", "Replacing bookkeeping", "Printing checks only"], "A", "Managers use this information to plan, control costs, and make decisions."),
      q("mab-003", "Which report is commonly used in managerial accounting?", ["Budget", "Birth certificate", "Personal resume", "Sales receipt only"], "A", "Budgets help managers plan expected income, costs, and activity."),
      q("mab-004", "Managerial accounting reports are usually prepared how often?", ["Only once every 10 years", "As often as managers need them", "Only at tax time", "Never"], "B", "Managerial reports can be prepared daily, weekly, monthly, or whenever useful."),
      q("mab-005", "Which topic is common in managerial accounting?", ["Product costs", "Personal credit score", "Mortgage approval only", "Stock market trading only"], "A", "Managerial accounting often studies product costs and how they affect business decisions."),
      q("mab-006", "A budget compares expected amounts to what?", ["Actual results", "Only old invoices", "The owner's age", "The bank name"], "A", "Comparing budgeted and actual results helps managers spot differences and adjust."),
      q("mab-007", "Which phrase best describes managerial accounting?", ["Future-focused and decision-focused", "Only for outside investors", "Only for filing taxes", "Never uses estimates"], "A", "Managerial accounting often looks forward and helps managers make decisions.")
    ]
  },
  {
    id: "cost-behavior",
    title: "Cost Behavior",
    category: "Managerial Accounting",
    topic: "Cost Behavior",
    description: "Identify fixed, variable, and mixed costs in realistic beginner business examples.",
    difficulty: "Beginner",
    questions: [
      q("cb-001", "Which cost usually stays the same in total when activity changes within the relevant range?", ["Variable cost", "Fixed cost", "Direct material cost", "Sales commission"], "B", "A fixed cost stays the same in total within the relevant range."),
      q("cb-002", "A cost that changes in total as production volume changes is called what?", ["Fixed cost", "Variable cost", "Period cost", "Sunk cost"], "B", "Variable costs change in total as activity changes."),
      q("cb-003", "Factory rent is most likely which type of cost?", ["Fixed cost", "Variable cost", "Direct material", "Sales discount"], "A", "Factory rent usually does not change just because more or fewer units are produced."),
      q("cb-004", "Direct materials used to make each product are usually what type of cost?", ["Fixed", "Variable", "Sunk", "Administrative"], "B", "Direct materials usually increase when more units are made."),
      q("cb-005", "A mixed cost contains which two parts?", ["Revenue and expenses", "Assets and liabilities", "Fixed and variable components", "Cash and credit components"], "C", "Mixed costs have both a fixed part and a variable part."),
      q("cb-006", "If total variable cost is $2 per unit, what is the total variable cost for 100 units?", ["$2", "$50", "$100", "$200"], "D", "Multiply $2 per unit by 100 units to get $200."),
      q("cb-007", "Which cost is most likely variable for a delivery company?", ["Monthly office rent", "Fuel used for deliveries", "Annual insurance policy", "Manager salary"], "B", "Fuel often changes with the number and distance of deliveries.")
    ]
  },
  {
    id: "excel-basics-for-accounting",
    title: "Excel Basics for Accounting",
    category: "Excel Basics",
    topic: "Excel Basics for Accounting",
    description: "Practice spreadsheet skills useful for accounting homework, schedules, and simple reports.",
    difficulty: "Beginner",
    questions: [
      q("exa-001", "What symbol starts a formula in Excel?", ["#", "=", "@", "$"], "B", "Excel formulas begin with an equals sign."),
      q("exa-002", "Which formula adds the values in cells A1 through A5?", ["=ADD(A1:A5)", "=SUM(A1:A5)", "=TOTAL(A1-A5)", "=A1+A5 ONLY"], "B", "SUM adds all numbers in a selected range."),
      q("exa-003", "Which formula finds the average of cells B2 through B6?", ["=AVG(B2:B6)", "=AVERAGE(B2:B6)", "=MEAN(B2-B6)", "=SUM(B2:B6)/B6"], "B", "AVERAGE calculates the average of the numbers in a range."),
      q("exa-004", "Which cell reference is absolute?", ["A1", "$A$1", "A$1B", "ABS(A1)"], "B", "Dollar signs lock the column and row, making $A$1 absolute."),
      q("exa-005", "Which Excel feature arranges rows from smallest to largest?", ["Filter", "Sort", "Wrap Text", "Freeze Panes"], "B", "Sort changes the order of rows based on the selected column."),
      q("exa-006", "What does Freeze Panes help you do?", ["Keep headings visible while scrolling", "Delete formulas permanently", "Change every number to text", "Lock the workbook from opening"], "A", "Freeze Panes keeps selected rows or columns visible while you scroll."),
      q("exa-007", "Why is currency formatting helpful in accounting worksheets?", ["It makes dollar amounts easier to read", "It removes all formulas", "It changes debits into credits", "It hides negative numbers automatically"], "A", "Currency formatting makes money amounts clearer and more professional.")
    ]
  },
  {
    id: "personal-budgeting-basics",
    title: "Personal Budgeting Basics",
    category: "Personal Finance Basics",
    topic: "Personal Budgeting Basics",
    description: "Learn beginner budgeting terms and simple ways to plan income, expenses, and savings.",
    difficulty: "Beginner",
    questions: [
      q("pb-001", "What is the main purpose of a personal budget?", ["To plan how income will be used", "To avoid tracking expenses", "To increase debt", "To skip saving"], "A", "A budget is a plan for income, spending, saving, and financial goals."),
      q("pb-002", "Which item is usually a fixed expense?", ["Monthly rent", "Restaurant spending", "Movie tickets", "Holiday gifts"], "A", "Rent is usually the same amount each month, so it is a fixed expense."),
      q("pb-003", "Which item is usually a variable expense?", ["Car insurance premium", "Rent", "Groceries", "Student loan minimum payment"], "C", "Groceries can change from week to week, making them a variable expense."),
      q("pb-004", "If income is $2,000 and expenses are $1,750, how much is left over?", ["$150", "$200", "$250", "$350"], "C", "Subtract expenses from income: $2,000 - $1,750 = $250."),
      q("pb-005", "What does it mean to pay yourself first?", ["Put money toward savings before optional spending", "Spend all income immediately", "Pay only the smallest bill", "Use credit before cash"], "A", "Paying yourself first means treating savings like a priority."),
      q("pb-006", "Which budget category should usually include emergency fund contributions?", ["Savings", "Entertainment", "Interest expense", "Late fees"], "A", "Emergency fund contributions are savings for unexpected expenses."),
      q("pb-007", "What is a good reason to track spending?", ["To see where money is actually going", "To make all bills disappear", "To avoid making decisions", "To increase every expense"], "A", "Tracking spending helps you compare actual habits to your budget plan.")
    ]
  },
  {
    id: "quickbooks-bookkeeping-basics",
    title: "QuickBooks / Bookkeeping Basics",
    category: "QuickBooks / Bookkeeping Basics",
    topic: "QuickBooks / Bookkeeping Basics",
    description: "Review everyday bookkeeping terms and QuickBooks-style workflows for beginners.",
    difficulty: "Beginner",
    questions: [
      q("qb-001", "What is bookkeeping mainly used for?", ["Recording and organizing business financial transactions", "Designing a company logo", "Replacing all bank accounts", "Avoiding financial records"], "A", "Bookkeeping keeps track of business transactions so records and reports are accurate."),
      q("qb-002", "In QuickBooks, an invoice is usually used when what happens?", ["A customer needs to be billed", "A vendor gives a discount only", "The owner changes the password", "A bank account is closed"], "A", "An invoice tells a customer what they owe for goods or services."),
      q("qb-003", "A bill in bookkeeping usually represents what?", ["Money the business owes to a vendor", "Money a customer owes the business", "Owner investment only", "A sales receipt only"], "A", "A bill records an amount the business owes to someone else."),
      q("qb-004", "What is the purpose of bank reconciliation?", ["To compare bookkeeping records to the bank statement", "To delete all old transactions", "To increase revenue automatically", "To replace invoices with bills"], "A", "Reconciliation checks that your records match the bank's records."),
      q("qb-005", "Which report commonly shows whether a business made money during a period?", ["Profit and Loss", "Vendor Contact List", "Check Register Only", "Password Report"], "A", "A Profit and Loss report shows income, expenses, and profit or loss."),
      q("qb-006", "What should you do before categorizing a bank feed transaction?", ["Review what the transaction is for", "Always mark it as revenue", "Delete it immediately", "Change the business name"], "A", "You should understand the transaction before choosing the correct account category."),
      q("qb-007", "Which account type is usually used for money owed by customers?", ["Accounts Receivable", "Accounts Payable", "Owner's Draw", "Utilities Expense"], "A", "Accounts Receivable tracks money customers owe to the business.")
    ]
  },
  {
    id: "advanced-adjusting-entries",
    title: "Advanced Adjusting Entries",
    category: "Financial Accounting",
    topic: "Advanced Adjusting Entries",
    description: "Practice accruals, deferrals, depreciation, supplies, and interest adjustments with calculation-based scenarios.",
    difficulty: "Advanced",
    questions: [
      q("aae-001", "On December 31, a firm has earned $1,800 of consulting revenue but has not billed the client. Which adjusting entry is needed?", ["Debit Accounts Receivable $1,800; Credit Service Revenue $1,800", "Debit Cash $1,800; Credit Service Revenue $1,800", "Debit Service Revenue $1,800; Credit Accounts Receivable $1,800", "Debit Unearned Revenue $1,800; Credit Service Revenue $1,800"], "A", "Accrued revenue records revenue earned before billing or cash collection."),
      q("aae-002", "Employees earned $2,400 for the last three days of December, but payroll will be paid in January. What adjustment is correct?", ["Debit Wages Payable $2,400; Credit Wages Expense $2,400", "Debit Wages Expense $2,400; Credit Wages Payable $2,400", "Debit Prepaid Wages $2,400; Credit Cash $2,400", "Debit Cash $2,400; Credit Wages Revenue $2,400"], "B", "Accrued wages increase expense and create a liability."),
      q("aae-003", "A company received $6,000 in advance for a 6-month service contract on November 1. By December 31, how much revenue should be recognized?", ["$0", "$1,000", "$2,000", "$6,000"], "C", "Two of six months have been earned, so $6,000 x 2/6 = $2,000."),
      q("aae-004", "On October 1, a business paid $3,600 for 12 months of insurance and recorded Prepaid Insurance. What is the December 31 adjustment?", ["Debit Insurance Expense $900; Credit Prepaid Insurance $900", "Debit Prepaid Insurance $900; Credit Insurance Expense $900", "Debit Insurance Expense $3,600; Credit Cash $3,600", "Debit Cash $900; Credit Insurance Revenue $900"], "A", "Three months expired, so $3,600 x 3/12 = $900 of insurance expense."),
      q("aae-005", "Equipment cost $24,000, has a $3,000 residual value, and a 7-year useful life. What annual straight-line depreciation should be adjusted?", ["$3,000", "$3,429", "$4,000", "$21,000"], "A", "Depreciable cost is $24,000 - $3,000 = $21,000; $21,000 / 7 = $3,000."),
      q("aae-006", "Supplies had an unadjusted debit balance of $1,250. A count shows $420 on hand. What adjustment is needed?", ["Debit Supplies Expense $420; Credit Supplies $420", "Debit Supplies $830; Credit Supplies Expense $830", "Debit Supplies Expense $830; Credit Supplies $830", "Debit Cash $830; Credit Supplies $830"], "C", "Supplies used are $1,250 - $420 = $830, which becomes expense."),
      q("aae-007", "A $10,000 note payable carries 9% annual interest and has been outstanding for 4 months at year-end. What interest accrual is needed?", ["$75", "$300", "$900", "$3,600"], "B", "Interest is $10,000 x 9% x 4/12 = $300.")
    ]
  },
  {
    id: "financial-statement-effects",
    title: "Financial Statement Effects",
    category: "Financial Accounting",
    topic: "Financial Statement Effects",
    description: "Analyze how transactions and adjustments affect net income, assets, liabilities, equity, and closing entries.",
    difficulty: "Intermediate",
    questions: [
      q("fse-001", "A business earns $900 of revenue on account in December but collects cash in January. What is the December effect under accrual accounting?", ["Revenue and net income increase in December", "Only cash increases in December", "No December effect because cash was not collected", "Liabilities increase in December"], "A", "Accrual accounting records revenue when earned, even before cash is collected."),
      q("fse-002", "A company pays $1,200 for a 12-month insurance policy and records it as Prepaid Insurance. What is the immediate effect?", ["Assets stay the same in total", "Expenses increase by $1,200", "Liabilities increase by $1,200", "Equity increases by $1,200"], "A", "Cash decreases and prepaid insurance increases, so total assets stay the same initially."),
      q("fse-003", "A company receives a $500 utility bill for December that will be paid next month. What is the effect of the adjusting entry?", ["Assets and equity increase", "Expenses and liabilities increase", "Revenue and assets increase", "Liabilities decrease and equity increases"], "B", "Recognizing the unpaid bill increases expense and accounts payable."),
      q("fse-004", "If a company forgets to record $700 of earned but unbilled revenue, what is the effect before correction?", ["Assets and net income are understated", "Assets are overstated and liabilities are understated", "Net income is overstated", "Liabilities and expenses are overstated"], "A", "Missing accrued revenue leaves receivables and revenue too low."),
      q("fse-005", "A company collects $2,000 cash from a customer for services that will be performed next month. What is the correct initial effect?", ["Revenue increases by $2,000", "Assets increase and liabilities increase", "Assets increase and equity increases", "Liabilities decrease and revenue increases"], "B", "Cash increases, and unearned revenue is a liability until the service is performed."),
      q("fse-006", "Rent for December is paid on January 5. If no December adjustment is made, what happens to December net income?", ["It is understated", "It is overstated", "It is unaffected", "It becomes zero"], "B", "Missing rent expense makes expenses too low, so net income is overstated."),
      q("fse-007", "At year-end, Service Revenue has a $12,000 credit balance and expenses total $7,500. What closing entry effect transfers the net result?", ["Debit Income Summary $4,500; Credit Owner's Capital $4,500", "Debit Owner's Capital $4,500; Credit Income Summary $4,500", "Debit Income Summary $19,500; Credit Owner's Capital $19,500", "Debit Service Revenue $4,500; Credit Cash $4,500"], "A", "Net income is $4,500, so Income Summary is debited and capital is credited.")
    ]
  },
  {
    id: "inventory-and-cogs",
    title: "Inventory and COGS",
    category: "Financial Accounting",
    topic: "Inventory and COGS",
    description: "Work through FIFO, LIFO, weighted average, ending inventory, COGS, inventory write-downs, and error effects.",
    difficulty: "Advanced",
    questions: [
      q("ic-001", "A company has beginning inventory of 10 units at $5, then buys 20 units at $6. It sells 18 units. Under FIFO, what is COGS?", ["$90", "$98", "$108", "$180"], "B", "FIFO sells oldest units first: 10 x $5 plus 8 x $6 = $98."),
      q("ic-002", "Using the same data - beginning 10 units at $5, purchase 20 units at $6, sell 18 units - what is COGS under LIFO?", ["$90", "$98", "$108", "$180"], "C", "LIFO sells newest units first: 18 x $6 = $108."),
      q("ic-003", "Beginning inventory is 100 units at $4 and a purchase is 200 units at $5. If 180 units are sold, what is weighted-average COGS?", ["$720", "$840", "$900", "$1,380"], "B", "Average cost is $1,400 / 300 = $4.6667; 180 units cost about $840."),
      q("ic-004", "Goods available for sale cost $15,000. Ending inventory is $4,200. What is cost of goods sold?", ["$4,200", "$10,800", "$15,000", "$19,200"], "B", "COGS equals goods available for sale minus ending inventory: $15,000 - $4,200."),
      q("ic-005", "An inventory item cost $80 and has net realizable value of $72. Under lower of cost or net realizable value, what amount should be reported?", ["$72", "$76", "$80", "$152"], "A", "Inventory is reported at the lower amount, so it should be written down to $72."),
      q("ic-006", "If ending inventory is overstated by $1,000, what happens to current-period COGS and net income?", ["COGS overstated; net income understated", "COGS understated; net income overstated", "Both COGS and net income understated", "No effect on net income"], "B", "Overstated ending inventory makes COGS too low and net income too high."),
      q("ic-007", "In a period of rising prices, which inventory method usually gives the highest net income?", ["FIFO", "LIFO", "Weighted average", "Specific identification always gives zero income"], "A", "FIFO assigns older, lower costs to COGS, which usually makes gross profit and net income higher.")
    ]
  },
  {
    id: "depreciation-and-book-value",
    title: "Depreciation and Book Value",
    category: "Financial Accounting",
    topic: "Depreciation and Book Value",
    description: "Practice depreciation expense, accumulated depreciation, book value, residual value, disposals, and impairment basics.",
    difficulty: "Intermediate",
    questions: [
      q("dbv-001", "A machine costs $50,000, has a $5,000 residual value, and a 9-year useful life. What is annual straight-line depreciation?", ["$5,000", "$5,556", "$6,111", "$45,000"], "A", "Depreciable cost is $50,000 - $5,000 = $45,000; $45,000 / 9 = $5,000."),
      q("dbv-002", "Equipment cost $30,000 and has accumulated depreciation of $12,000. What is book value?", ["$12,000", "$18,000", "$30,000", "$42,000"], "B", "Book value equals cost minus accumulated depreciation: $30,000 - $12,000."),
      q("dbv-003", "After recording depreciation expense of $2,500, what happens to accumulated depreciation and book value?", ["Accumulated depreciation increases and book value decreases", "Accumulated depreciation decreases and book value increases", "Both increase", "Neither changes"], "A", "Depreciation credits accumulated depreciation, reducing book value."),
      q("dbv-004", "An asset costs $18,000, has a $3,000 residual value, and a 5-year life. After 2 full years, what is book value using straight-line depreciation?", ["$6,000", "$9,000", "$12,000", "$15,000"], "C", "Annual depreciation is $3,000; after 2 years book value is $18,000 - $6,000 = $12,000."),
      q("dbv-005", "A truck with book value of $7,500 is sold for $6,200 cash. What is the result?", ["Gain of $1,300", "Loss of $1,300", "Gain of $6,200", "No gain or loss"], "B", "Selling price below book value creates a loss of $7,500 - $6,200 = $1,300."),
      q("dbv-006", "Why is residual value subtracted before calculating straight-line depreciation?", ["It is the estimated amount not expected to be depreciated", "It is always paid in cash at purchase", "It increases annual depreciation", "It is the same as accumulated depreciation"], "A", "Only cost expected to be used up is depreciated over the asset's life."),
      q("dbv-007", "An asset has book value of $20,000, but expected recoverable value is only $14,000. What impairment loss should be recognized?", ["$0", "$6,000", "$14,000", "$20,000"], "B", "Impairment reduces carrying value from $20,000 to $14,000, a $6,000 loss.")
    ]
  },
  {
    id: "contribution-margin-and-break-even",
    title: "Contribution Margin and Break-Even",
    category: "Managerial Accounting",
    topic: "Contribution Margin and Break-Even",
    description: "Calculate contribution margin, contribution margin ratio, break-even points, target profit, margin of safety, and cost behavior.",
    difficulty: "Advanced",
    questions: [
      q("cmb-001", "A product sells for $40 and has variable cost of $24 per unit. What is contribution margin per unit?", ["$16", "$24", "$40", "$64"], "A", "Contribution margin per unit is selling price minus variable cost: $40 - $24 = $16."),
      q("cmb-002", "Sales are $80,000 and variable costs are $50,000. What is the contribution margin ratio?", ["30.0%", "37.5%", "62.5%", "160.0%"], "B", "Contribution margin is $30,000; $30,000 / $80,000 = 37.5%."),
      q("cmb-003", "Fixed costs are $48,000 and contribution margin per unit is $12. How many units must be sold to break even?", ["2,500", "4,000", "5,760", "48,000"], "B", "Break-even units equal fixed costs / CM per unit: $48,000 / $12 = 4,000 units."),
      q("cmb-004", "Fixed costs are $60,000 and the contribution margin ratio is 40%. What sales dollars are needed to break even?", ["$24,000", "$60,000", "$100,000", "$150,000"], "D", "Break-even sales dollars equal fixed costs / CM ratio: $60,000 / 0.40 = $150,000."),
      q("cmb-005", "Fixed costs are $30,000, contribution margin per unit is $15, and target profit is $12,000. How many units are needed?", ["800", "2,000", "2,800", "3,500"], "C", "Units for target profit equal ($30,000 + $12,000) / $15 = 2,800."),
      q("cmb-006", "Actual sales are $220,000 and break-even sales are $175,000. What is the margin of safety in dollars?", ["$45,000", "$175,000", "$220,000", "$395,000"], "A", "Margin of safety is actual sales minus break-even sales: $220,000 - $175,000."),
      q("cmb-007", "Which cost is most likely fixed for break-even analysis within the relevant range?", ["Sales commissions per unit", "Direct materials per unit", "Monthly store rent", "Packaging per unit"], "C", "Rent usually stays fixed in total within the relevant range.")
    ]
  },
  {
    id: "relevant-costs-and-decisions",
    title: "Relevant Costs and Decisions",
    category: "Managerial Accounting",
    topic: "Relevant Costs and Decisions",
    description: "Use relevant costs, sunk costs, opportunity costs, avoidable costs, and decision rules in common management scenarios.",
    difficulty: "Advanced",
    questions: [
      q("rcd-001", "A company is choosing between two machines. Which cost is relevant to the decision?", ["The book value of the old machine already owned", "Future maintenance cost that differs between machines", "Last year's repair cost", "Original cost of the old machine"], "B", "Relevant costs are future costs that differ between alternatives."),
      q("rcd-002", "A company spent $8,000 on a design that cannot be refunded. For a go/no-go decision today, that $8,000 is what type of cost?", ["Opportunity cost", "Avoidable cost", "Sunk cost", "Variable cost only"], "C", "A sunk cost has already been incurred and cannot be changed by the decision."),
      q("rcd-003", "A student can earn $600 working this weekend or attend a free training. If the student attends training, the $600 is best described as what?", ["Sunk cost", "Opportunity cost", "Committed fixed cost", "Depreciation expense"], "B", "Opportunity cost is the benefit given up by choosing one alternative over another."),
      q("rcd-004", "A product line has sales of $90,000, variable costs of $54,000, and avoidable fixed costs of $20,000. What is the effect on profit if the line is dropped?", ["Profit increases by $16,000", "Profit decreases by $16,000", "Profit increases by $36,000", "No effect on profit"], "B", "The line contributes $36,000 before avoidable fixed costs, or $16,000 after them, so dropping it lowers profit by $16,000."),
      q("rcd-005", "A part can be made for variable cost of $11 per unit plus avoidable fixed cost of $18,000. Buying costs $14 per unit for 8,000 units. Which is cheaper?", ["Make by $6,000", "Buy by $6,000", "Make by $24,000", "Buy by $18,000"], "A", "Make cost is $88,000 + $18,000 = $106,000; buy cost is $112,000, so make is $6,000 cheaper."),
      q("rcd-006", "A special order offers $18 per unit for 1,000 units. Variable cost is $12 per unit and there is idle capacity. Fixed costs will not change. What is the profit effect?", ["Increase profit by $6,000", "Decrease profit by $6,000", "Increase profit by $18,000", "No effect because price is below regular price"], "A", "With idle capacity, contribution is ($18 - $12) x 1,000 = $6,000."),
      q("rcd-007", "A fixed cost will continue whether a department is kept or dropped. For a keep-or-drop decision, that fixed cost is usually what?", ["Avoidable and relevant", "Unavoidable and not relevant", "Opportunity cost", "Direct material cost"], "B", "Costs that do not change between alternatives are not relevant.")
    ]
  },
  {
    id: "accounting-formulas-in-excel",
    title: "Accounting Formulas in Excel",
    category: "Excel Basics",
    topic: "Accounting Formulas in Excel",
    description: "Practice Excel formulas accountants use for totals, logic, percentages, links, variances, and common formula errors.",
    difficulty: "Intermediate",
    questions: [
      q("afe-001", "Cells B2:B8 contain invoice amounts. Which formula correctly totals them?", ["=TOTAL(B2:B8)", "=SUM(B2:B8)", "=ADD(B2-B8)", "SUM=B2:B8"], "B", "Excel uses SUM with a colon range: =SUM(B2:B8)."),
      q("afe-002", "Cell C2 contains an account balance. Which formula returns Over budget if C2 is greater than 1000, otherwise OK?", ["=IF(C2>1000,\"Over budget\",\"OK\")", "=IF C2>1000 THEN Over budget ELSE OK", "=SUM(C2>1000,\"Over budget\",\"OK\")", "=IF(C2<1000,\"Over budget\",\"OK\")"], "A", "IF uses logical_test, value_if_true, value_if_false."),
      q("afe-003", "You want to copy a formula down while always multiplying by the tax rate in cell F1. Which reference should lock F1?", ["F1", "$F$1", "$F1", "F$1"], "B", "The dollar signs in $F$1 lock both the column and row."),
      q("afe-004", "Actual sales are in B2 and budgeted sales are in C2. Which formula calculates actual as a percentage of budget?", ["=C2/B2", "=B2/C2", "=B2-C2%", "=SUM(B2:C2)"], "B", "Actual divided by budget gives actual as a percent of budget."),
      q("afe-005", "On a summary sheet, which formula links directly to cell D10 on a sheet named January?", ["=January!D10", "=D10!January", "=LINK(January,D10)", "=January:D10"], "A", "A direct sheet link uses SheetName!CellReference."),
      q("afe-006", "Actual expense is in B2 and budgeted expense is in C2. Which variance formula shows positive when actual is over budget?", ["=C2-B2", "=B2-C2", "=B2/C2", "=SUM(B2:C2)"], "B", "Actual minus budget gives a positive variance when actual expense is higher."),
      q("afe-007", "A formula returns #DIV/0! in a cost-per-unit schedule. What is the most likely cause?", ["The formula is dividing by zero or a blank cell", "The formula has too many decimal places", "The cell is formatted as currency", "The formula uses SUM"], "A", "#DIV/0! appears when Excel divides by zero or an empty denominator cell.")
    ]
  },
  {
    id: "bank-reconciliations",
    title: "Bank Reconciliations",
    category: "Financial Accounting",
    topic: "Bank Reconciliations",
    description: "Practice deposits in transit, outstanding checks, bank charges, NSF checks, interest, and corrected cash balances.",
    difficulty: "Intermediate",
    questions: [
      q("br-001", "The bank statement shows $13,800. Deposits in transit are $1,500 and outstanding checks are $2,200. What is the adjusted bank balance?", ["$11,600", "$13,100", "$15,300", "$17,500"], "B", "Add deposits in transit and subtract outstanding checks: $13,800 + $1,500 - $2,200 = $13,100."),
      q("br-002", "A $35 bank service charge appears on the bank statement but is not in the books. What book entry is needed?", ["Debit Cash $35; Credit Bank Fee Expense $35", "Debit Bank Fee Expense $35; Credit Cash $35", "Debit Accounts Receivable $35; Credit Cash $35", "Debit Cash $35; Credit Interest Revenue $35"], "B", "A service charge reduces the book cash balance and records an expense."),
      q("br-003", "A customer's $600 check was returned NSF by the bank. What adjustment should the company record?", ["Debit Accounts Receivable $600; Credit Cash $600", "Debit Cash $600; Credit Accounts Receivable $600", "Debit Bad Debt Expense $600; Credit Cash $600", "Debit Cash $600; Credit Service Revenue $600"], "A", "An NSF check puts the customer's receivable back on the books and reduces cash."),
      q("br-004", "The bank collected $24 of interest for the company. The company has not recorded it. What is the correct adjustment?", ["Debit Interest Expense $24; Credit Cash $24", "Debit Cash $24; Credit Interest Revenue $24", "Debit Accounts Payable $24; Credit Cash $24", "Debit Cash $24; Credit Accounts Receivable $24"], "B", "Interest earned increases cash and interest revenue."),
      q("br-005", "The book cash balance is $9,850. The bank statement shows a $40 service charge, a $320 NSF check, and $25 interest earned. What is the adjusted book balance?", ["$9,465", "$9,515", "$10,135", "$10,235"], "B", "Adjust book cash: $9,850 - $40 - $320 + $25 = $9,515."),
      q("br-006", "Which item is normally subtracted from the bank statement balance during a bank reconciliation?", ["Deposit in transit", "Outstanding check", "Interest earned by bank", "Book error that understated cash"], "B", "Outstanding checks have been recorded by the company but not yet cleared by the bank."),
      q("br-007", "After reconciling, the adjusted bank balance is $8,420 and the adjusted book balance is $8,420. What should the corrected cash balance be?", ["$0", "$8,420", "The original book balance", "The original bank balance"], "B", "When both sides reconcile, the shared adjusted amount is the corrected cash balance.")
    ]
  },
  {
    id: "receivables-and-bad-debt",
    title: "Receivables and Bad Debt",
    category: "Financial Accounting",
    topic: "Receivables and Bad Debt",
    description: "Review allowance method entries, write-offs, recoveries, net realizable value, and aging estimates.",
    difficulty: "Intermediate",
    questions: [
      q("rbd-001", "Why does the allowance method estimate bad debts before specific customers are known to be uncollectible?", ["To match bad debt expense with the related credit sales period", "To avoid recording accounts receivable", "To increase cash before collection", "To replace all write-off entries"], "A", "The allowance method matches estimated bad debt expense with the period of related sales."),
      q("rbd-002", "Under the direct write-off method, a $450 account is determined to be uncollectible. What entry is recorded?", ["Debit Allowance for Doubtful Accounts $450; Credit Accounts Receivable $450", "Debit Bad Debt Expense $450; Credit Accounts Receivable $450", "Debit Accounts Receivable $450; Credit Bad Debt Expense $450", "Debit Cash $450; Credit Accounts Receivable $450"], "B", "Direct write-off records bad debt expense only when a specific account is written off."),
      q("rbd-003", "Allowance for Doubtful Accounts has a $900 credit balance. The desired ending allowance is $2,500. What bad debt expense is needed?", ["$900", "$1,600", "$2,500", "$3,400"], "B", "The adjustment must increase the allowance from $900 to $2,500, so expense is $1,600."),
      q("rbd-004", "Under the allowance method, a $700 account is written off. What is the effect on net accounts receivable?", ["Net accounts receivable decreases by $700", "Net accounts receivable increases by $700", "Net accounts receivable does not change", "Bad debt expense increases by $700"], "C", "The write-off reduces both Accounts Receivable and the Allowance, so net receivables do not change."),
      q("rbd-005", "A company recovers $300 from a customer whose account had been written off. What is the usual first step?", ["Debit Accounts Receivable $300; Credit Allowance for Doubtful Accounts $300", "Debit Cash $300; Credit Bad Debt Expense $300", "Debit Allowance for Doubtful Accounts $300; Credit Cash $300", "Debit Bad Debt Expense $300; Credit Accounts Receivable $300"], "A", "Recovery first reinstates the receivable, then the cash collection is recorded."),
      q("rbd-006", "Accounts Receivable is $50,000 and Allowance for Doubtful Accounts has a $3,200 credit balance. What is net realizable value?", ["$3,200", "$46,800", "$50,000", "$53,200"], "B", "Net realizable value is receivables minus the allowance: $50,000 - $3,200 = $46,800."),
      q("rbd-007", "An aging schedule estimates the allowance should be $4,800. The allowance account currently has a $600 debit balance. What bad debt expense is required?", ["$4,200", "$4,800", "$5,400", "$600"], "C", "A debit balance must be offset and then built to $4,800, so expense is $5,400.")
    ]
  },
  {
    id: "bonds-payable-basics",
    title: "Bonds Payable Basics",
    category: "Financial Accounting",
    topic: "Bonds Payable Basics",
    description: "Practice face value, stated and market rates, premiums, discounts, interest expense, and carrying value.",
    difficulty: "Intermediate",
    questions: [
      q("bpb-001", "What does the face value of a bond represent?", ["The amount repaid at maturity", "The amount of interest paid each month", "The market price on every interest date", "The premium recorded at issue"], "A", "Face value is the principal amount the issuer repays at maturity."),
      q("bpb-002", "A $100,000 bond has a 6% stated annual interest rate and pays interest semiannually. What cash interest is paid every six months?", ["$3,000", "$6,000", "$50,000", "$106,000"], "A", "Cash interest is $100,000 x 6% x 6/12 = $3,000."),
      q("bpb-003", "A bond is most likely issued at a premium when which condition exists?", ["Stated rate is lower than the market rate", "Stated rate equals the market rate", "Stated rate is higher than the market rate", "Face value is lower than maturity value"], "C", "Investors pay a premium when the bond's stated rate is higher than the market rate."),
      q("bpb-004", "A bond is issued at 98. If face value is $50,000, how much cash is received at issue?", ["$48,000", "$49,000", "$50,000", "$51,000"], "B", "A price of 98 means 98% of face value: $50,000 x 0.98 = $49,000."),
      q("bpb-005", "When a bond is issued at a discount, what happens to carrying value as the discount is amortized?", ["It increases toward face value", "It decreases away from face value", "It stays equal to cash interest", "It immediately becomes zero"], "A", "Discount amortization increases carrying value toward the amount due at maturity."),
      q("bpb-006", "Under the effective-interest method, interest expense is based on which amount?", ["Face value times stated rate only", "Carrying value times market rate", "Cash paid times stated rate", "Premium divided by face value"], "B", "Effective interest expense uses the carrying value and market rate."),
      q("bpb-007", "A $80,000 bond is issued at 103. What is the bond premium at issue?", ["$2,400", "$3,000", "$80,000", "$82,400"], "A", "Cash received is $82,400, so the premium is $82,400 - $80,000 = $2,400.")
    ]
  },
  {
    id: "statement-of-cash-flows",
    title: "Statement of Cash Flows",
    category: "Financial Accounting",
    topic: "Statement of Cash Flows",
    description: "Classify cash flows and practice indirect method adjustments for operating cash flow.",
    difficulty: "Advanced",
    questions: [
      q("scf-001", "Cash received from customers for services is classified as which activity?", ["Operating activity", "Investing activity", "Financing activity", "Noncash investing activity"], "A", "Cash from customers comes from normal operations."),
      q("scf-002", "A company pays $18,000 cash to buy equipment. How is this reported on the statement of cash flows?", ["Operating cash outflow", "Investing cash outflow", "Financing cash outflow", "Added back to net income"], "B", "Cash paid for long-term assets is an investing outflow."),
      q("scf-003", "A company issues common stock for $25,000 cash. Which section reports this transaction?", ["Operating activities", "Investing activities", "Financing activities", "Noncash activities only"], "C", "Issuing stock raises capital, so it is a financing cash inflow."),
      q("scf-004", "Under the indirect method, operating cash flow starts with what amount?", ["Cash balance", "Net income", "Total assets", "Sales revenue"], "B", "The indirect method begins with net income and adjusts to cash from operations."),
      q("scf-005", "Why is depreciation expense added back to net income under the indirect method?", ["It reduced net income but did not use cash", "It is an investing cash inflow", "It increases accounts receivable", "It is paid to bondholders"], "A", "Depreciation is a noncash expense, so it is added back."),
      q("scf-006", "Accounts Receivable increased by $1,200 during the year. Under the indirect method, what is the adjustment to net income?", ["Add $1,200", "Subtract $1,200", "No adjustment", "Report as financing activity"], "B", "An increase in receivables means some revenue was not collected in cash, so subtract it."),
      q("scf-007", "A company buys equipment by signing a long-term note payable. How should this be handled on the statement of cash flows?", ["As an operating cash outflow", "As an investing cash outflow", "As a financing cash inflow", "Disclosed as a noncash investing and financing activity"], "D", "No cash changed hands, so it is disclosed as a noncash investing and financing activity.")
    ]
  },
  {
    id: "budgeting-and-variance-analysis",
    title: "Budgeting and Variance Analysis",
    category: "Managerial Accounting",
    topic: "Budgeting and Variance Analysis",
    description: "Practice static budgets, flexible budgets, favorable and unfavorable variances, and basic cost variances.",
    difficulty: "Advanced",
    questions: [
      q("bva-001", "A static budget was prepared for 5,000 units, but actual production was 5,600 units. What is the main limitation of comparing actual results to the static budget?", ["It ignores the change in activity level", "It always removes all fixed costs", "It uses actual prices only", "It cannot include revenue"], "A", "A static budget is based on the original planned activity level."),
      q("bva-002", "What does a flexible budget do?", ["Adjusts budgeted amounts to the actual activity level", "Uses only last year's actual results", "Ignores variable costs", "Records journal entries for cash"], "A", "A flexible budget updates budgeted amounts for the actual volume of activity."),
      q("bva-003", "Actual expense is $7,800 and flexible budget expense is $8,300. How is the variance described?", ["$500 favorable", "$500 unfavorable", "$8,300 favorable", "$16,100 unfavorable"], "A", "Actual expense is lower than budgeted expense, which is favorable."),
      q("bva-004", "Budgeted sales were 10,000 units, but actual sales were 11,200 units. Which variance concept focuses on the impact of selling more units than planned?", ["Sales volume variance", "Direct materials price variance", "Labor rate variance", "Overhead spending variance"], "A", "Sales volume variance isolates the effect of actual units differing from budgeted units."),
      q("bva-005", "A company used 1,000 pounds of material. Standard price is $5.00 per pound, but actual price is $5.20. What is the direct materials price variance?", ["$200 favorable", "$200 unfavorable", "$5,000 unfavorable", "$5,200 favorable"], "B", "($5.20 - $5.00) x 1,000 = $200 unfavorable."),
      q("bva-006", "Standard materials allowed are 2,000 pounds at $4 per pound. Actual quantity used is 2,100 pounds. What is the materials quantity variance?", ["$100 unfavorable", "$400 unfavorable", "$400 favorable", "$8,400 unfavorable"], "B", "(2,100 - 2,000) x $4 = $400 unfavorable."),
      q("bva-007", "Actual labor hours are 500, actual rate is $22, and standard rate is $20. What is the labor rate variance?", ["$1,000 unfavorable", "$1,000 favorable", "$10,000 unfavorable", "$11,000 favorable"], "A", "($22 - $20) x 500 = $1,000 unfavorable.")
    ]
  },
  {
    id: "job-order-costing",
    title: "Job Order Costing",
    category: "Managerial Accounting",
    topic: "Job Order Costing",
    description: "Review job cost sheets, direct costs, overhead rates, applied overhead, and overhead adjustments.",
    difficulty: "Intermediate",
    questions: [
      q("joc-001", "What is the main purpose of a job cost sheet?", ["To track costs assigned to a specific job", "To reconcile the bank account", "To calculate bond interest", "To close revenue accounts"], "A", "A job cost sheet accumulates direct materials, direct labor, and overhead for one job."),
      q("joc-002", "A factory issues $1,400 of direct materials to Job 27. What account is usually debited?", ["Raw Materials Inventory", "Work in Process Inventory", "Finished Goods Inventory", "Manufacturing Overhead"], "B", "Direct materials used on a job are charged to Work in Process."),
      q("joc-003", "Employees work 30 direct labor hours on Job 14 at $18 per hour. What cost is added to the job?", ["$48", "$540", "$600", "$1,800"], "B", "Direct labor cost is 30 x $18 = $540."),
      q("joc-004", "Estimated manufacturing overhead is $120,000 and estimated machine hours are 20,000. What is the predetermined overhead rate?", ["$4 per machine hour", "$6 per machine hour", "$20 per machine hour", "$120,000 per job"], "B", "$120,000 / 20,000 machine hours = $6 per machine hour."),
      q("joc-005", "A job uses 350 machine hours and the overhead rate is $6 per machine hour. How much overhead is applied?", ["$350", "$2,100", "$6,000", "$21,000"], "B", "Applied overhead is 350 x $6 = $2,100."),
      q("joc-006", "Actual overhead is $52,000 and applied overhead is $48,000. What is the overhead status before adjustment?", ["$4,000 underapplied", "$4,000 overapplied", "$100,000 overapplied", "No adjustment needed"], "A", "Applied overhead is less than actual overhead, so overhead is underapplied by $4,000."),
      q("joc-007", "Applied overhead is greater than actual overhead. What does that mean?", ["Overhead is overapplied", "Overhead is underapplied", "Direct materials were unpaid", "Finished goods must be zero"], "A", "Overapplied overhead means more overhead was assigned to jobs than was actually incurred.")
    ]
  },
  {
    id: "lookup-if-and-error-checks",
    title: "Lookup, IF, and Error Checks",
    category: "Excel Basics",
    topic: "Lookup, IF, and Error Checks",
    description: "Practice lookup formulas, IF logic, IFERROR, SUMIF, absolute references, conditional formatting, and common formula errors.",
    difficulty: "Advanced",
    questions: [
      q("xle-001", "Cell A2 contains an account number. Which formula looks up A2 in F2:F10 and returns the matching name from G2:G10?", ["=XLOOKUP(A2,$F$2:$F$10,$G$2:$G$10)", "=XLOOKUP($F$2:$F$10,A2,$G$2:$G$10)", "=SUMIF(A2,$F$2:$F$10,$G$2:$G$10)", "=IFERROR(A2,$G$2:$G$10)"], "A", "XLOOKUP uses lookup value, lookup array, then return array."),
      q("xle-002", "Which VLOOKUP formula uses an exact match for the value in A2 against the first column of F2:H20 and returns column 3?", ["=VLOOKUP(A2,$F$2:$H$20,3,FALSE)", "=VLOOKUP(A2,$F$2:$H$20,3,TRUE)", "=VLOOKUP($F$2:$H$20,A2,3,FALSE)", "=VLOOKUP(A2,$F$2:$H$20,FALSE,3)"], "A", "FALSE requests an exact match in VLOOKUP."),
      q("xle-003", "Actual spending is in B2 and budget is in C2. Which formula returns Over budget when actual is greater than budget?", ["=IF(B2>C2,\"Over budget\",\"OK\")", "=IF(C2>B2,\"Over budget\",\"OK\")", "=SUMIF(B2>C2,\"Over budget\")", "=IFERROR(B2>C2)"], "A", "The logical test should check whether actual spending is greater than budget."),
      q("xle-004", "Which formula returns 0 instead of an error when B2 divided by C2 creates an error?", ["=IFERROR(B2/C2,0)", "=IF(B2/C2,ERROR,0)", "=SUMIF(B2/C2,0)", "=XLOOKUP(B2/C2,0)"], "A", "IFERROR returns the second argument when the first argument produces an error."),
      q("xle-005", "Column A contains account names and column B contains amounts. Which formula totals amounts where the account name is Rent?", ["=SUMIF(A:A,\"Rent\",B:B)", "=COUNTIF(A:A,\"Rent\",B:B)", "=SUM(B:B,\"Rent\")", "=IF(A:A=\"Rent\",SUM(B:B))"], "A", "SUMIF uses range, criteria, then sum range."),
      q("xle-006", "A tax rate is stored in F1. Which reference should be used so formulas copied across rows and columns always use F1?", ["F1", "$F$1", "$F1", "F$1"], "B", "$F$1 locks both the column and row."),
      q("xle-007", "A conditional formatting rule should flag rows where actual cost in column B is greater than budget in column C. Which formula is best for row 2?", ["=$B2>$C2", "=B$2>C$2", "=$C2>$B2", "=IFERROR($B2,$C2)"], "A", "Locking columns B and C while leaving the row relative lets the rule test each row correctly.")
    ]
  }
];
