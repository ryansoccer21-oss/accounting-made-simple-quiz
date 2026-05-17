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
    // HOW TO ADD A NEW QUESTION:
    // Add one object inside the quiz's questions array.
    // Keep choices as exactly four answers, in A/B/C/D order.
    // correctAnswer must be "A", "B", "C", or "D".
    questions: [
      {
        id: "ae-001",
        question: "What is the basic accounting equation?",
        choices: [
          "Assets = Liabilities + Equity",
          "Assets = Revenue - Expenses",
          "Liabilities = Assets + Equity",
          "Equity = Revenue + Cash"
        ],
        correctAnswer: "A",
        explanation: "The basic accounting equation is Assets = Liabilities + Equity."
      },
      {
        id: "ae-002",
        question: "A company buys equipment for cash. What happens to total assets?",
        choices: [
          "Total assets increase",
          "Total assets decrease",
          "Total assets stay the same",
          "Total liabilities increase"
        ],
        correctAnswer: "C",
        explanation: "One asset increases, equipment, and another asset decreases, cash, so total assets stay the same."
      },
      {
        id: "ae-003",
        question: "If a business borrows $5,000 cash from a bank, what happens?",
        choices: [
          "Assets increase and liabilities increase",
          "Assets decrease and equity decreases",
          "Liabilities decrease and equity increases",
          "Assets increase and revenue increases"
        ],
        correctAnswer: "A",
        explanation: "Cash increases assets, and the loan creates a liability the business must repay."
      },
      {
        id: "ae-004",
        question: "Owner investment usually increases which part of the accounting equation?",
        choices: ["Liabilities", "Equity", "Expenses", "Contra assets"],
        correctAnswer: "B",
        explanation: "Owner investment increases equity because the owner's claim on the business increases."
      },
      {
        id: "ae-005",
        question: "If assets are $20,000 and liabilities are $8,000, what is equity?",
        choices: ["$8,000", "$12,000", "$20,000", "$28,000"],
        correctAnswer: "B",
        explanation: "Equity equals assets minus liabilities: $20,000 - $8,000 = $12,000."
      },
      {
        id: "ae-006",
        question: "Paying off a loan with cash affects the accounting equation how?",
        choices: [
          "Assets decrease and liabilities decrease",
          "Assets increase and liabilities increase",
          "Assets decrease and equity increases",
          "Liabilities increase and equity decreases"
        ],
        correctAnswer: "A",
        explanation: "Cash decreases assets, and the loan balance decreases liabilities."
      },
      {
        id: "ae-007",
        question: "Which account is an asset?",
        choices: ["Accounts Payable", "Owner's Capital", "Cash", "Service Revenue"],
        correctAnswer: "C",
        explanation: "Cash is an asset because it is a resource owned by the business."
      }
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
      {
        id: "dc-001",
        question: "Which side increases an asset account?",
        choices: ["Debit", "Credit", "Both sides equally", "Neither side"],
        correctAnswer: "A",
        explanation: "Assets increase with debits and normally have debit balances."
      },
      {
        id: "dc-002",
        question: "Which side increases a liability account?",
        choices: ["Debit", "Credit", "Left side only", "Neither side"],
        correctAnswer: "B",
        explanation: "Liabilities increase with credits and normally have credit balances."
      },
      {
        id: "dc-003",
        question: "Revenue accounts normally have what balance?",
        choices: ["Debit", "Credit", "Zero only", "Asset"],
        correctAnswer: "B",
        explanation: "Revenue increases equity, and revenue accounts normally have credit balances."
      },
      {
        id: "dc-004",
        question: "Expense accounts usually increase with which side?",
        choices: ["Debit", "Credit", "Both debit and credit", "No entry is needed"],
        correctAnswer: "A",
        explanation: "Expenses decrease equity, and expense accounts increase with debits."
      },
      {
        id: "dc-005",
        question: "If Cash is credited, what usually happened to Cash?",
        choices: ["Cash increased", "Cash decreased", "Cash became revenue", "Cash became equity"],
        correctAnswer: "B",
        explanation: "Cash is an asset, and assets decrease with credits."
      },
      {
        id: "dc-006",
        question: "Which account normally has a credit balance?",
        choices: ["Rent Expense", "Accounts Payable", "Cash", "Supplies"],
        correctAnswer: "B",
        explanation: "Accounts Payable is a liability, and liabilities normally have credit balances."
      },
      {
        id: "dc-007",
        question: "In every journal entry, total debits should equal what?",
        choices: ["Total credits", "Total assets", "Net income", "Total expenses"],
        correctAnswer: "A",
        explanation: "Debits must equal credits to keep the accounting equation balanced."
      }
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
      {
        id: "je-001",
        question: "A business receives $1,000 cash from its owner as an investment. What is the correct journal entry?",
        choices: [
          "Debit Cash $1,000; Credit Owner's Capital $1,000",
          "Debit Owner's Capital $1,000; Credit Cash $1,000",
          "Debit Revenue $1,000; Credit Cash $1,000",
          "Debit Cash $1,000; Credit Accounts Payable $1,000"
        ],
        correctAnswer: "A",
        explanation: "Cash increases with a debit. Owner's Capital increases equity, so it is credited."
      },
      {
        id: "je-002",
        question: "A company buys office supplies for $300 cash. Which entry records the purchase?",
        choices: [
          "Debit Cash $300; Credit Supplies $300",
          "Debit Supplies $300; Credit Cash $300",
          "Debit Supplies Expense $300; Credit Accounts Payable $300",
          "Debit Accounts Receivable $300; Credit Supplies $300"
        ],
        correctAnswer: "B",
        explanation: "Supplies are an asset and increase with a debit. Cash decreases with a credit."
      },
      {
        id: "je-003",
        question: "A company performs $750 of services for a customer on account. What is the entry?",
        choices: [
          "Debit Cash $750; Credit Service Revenue $750",
          "Debit Service Revenue $750; Credit Accounts Receivable $750",
          "Debit Accounts Receivable $750; Credit Service Revenue $750",
          "Debit Accounts Payable $750; Credit Service Revenue $750"
        ],
        correctAnswer: "C",
        explanation: "On account means the customer will pay later, so Accounts Receivable is debited and revenue is credited."
      },
      {
        id: "je-004",
        question: "A business pays $500 cash for rent for the current month. What entry should be recorded?",
        choices: [
          "Debit Rent Expense $500; Credit Cash $500",
          "Debit Cash $500; Credit Rent Expense $500",
          "Debit Prepaid Rent $500; Credit Cash $500",
          "Debit Accounts Payable $500; Credit Cash $500"
        ],
        correctAnswer: "A",
        explanation: "Rent for the current month is an expense, and cash decreases when paid."
      },
      {
        id: "je-005",
        question: "A company receives a $200 utility bill but will pay it next month. What is the correct entry now?",
        choices: [
          "Debit Utilities Expense $200; Credit Cash $200",
          "Debit Utilities Expense $200; Credit Accounts Payable $200",
          "Debit Accounts Payable $200; Credit Utilities Expense $200",
          "Debit Cash $200; Credit Utilities Expense $200"
        ],
        correctAnswer: "B",
        explanation: "The expense has been incurred, and Accounts Payable is credited because it will be paid later."
      },
      {
        id: "je-006",
        question: "A customer pays $400 cash on account. Which entry is correct?",
        choices: [
          "Debit Cash $400; Credit Accounts Receivable $400",
          "Debit Accounts Receivable $400; Credit Cash $400",
          "Debit Cash $400; Credit Service Revenue $400",
          "Debit Accounts Payable $400; Credit Cash $400"
        ],
        correctAnswer: "A",
        explanation: "Cash increases, and Accounts Receivable decreases because the customer paid an amount owed."
      },
      {
        id: "je-007",
        question: "A business pays $250 owed to a supplier. Which entry is correct?",
        choices: [
          "Debit Supplies $250; Credit Cash $250",
          "Debit Cash $250; Credit Accounts Payable $250",
          "Debit Accounts Payable $250; Credit Cash $250",
          "Debit Accounts Receivable $250; Credit Cash $250"
        ],
        correctAnswer: "C",
        explanation: "Paying a supplier reduces Accounts Payable with a debit and reduces Cash with a credit."
      }
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
      {
        id: "adj-001",
        question: "Why are adjusting entries recorded?",
        choices: [
          "To update accounts before financial statements are prepared",
          "To erase all revenue accounts permanently",
          "To replace journal entries during the month",
          "To avoid using the accrual basis"
        ],
        correctAnswer: "A",
        explanation: "Adjusting entries update accounts so financial statements reflect the correct period."
      },
      {
        id: "adj-002",
        question: "A company used $120 of supplies during the month. What account should be debited?",
        choices: ["Supplies", "Supplies Expense", "Cash", "Accounts Payable"],
        correctAnswer: "B",
        explanation: "Used supplies become an expense, so Supplies Expense is debited."
      },
      {
        id: "adj-003",
        question: "Unearned revenue becomes revenue when what happens?",
        choices: [
          "Cash is received",
          "The service is performed",
          "The customer is billed",
          "The month begins"
        ],
        correctAnswer: "B",
        explanation: "Unearned revenue is a liability until the business earns it by performing the service."
      },
      {
        id: "adj-004",
        question: "Which adjusting entry records wages earned by employees but not yet paid?",
        choices: [
          "Debit Wages Expense; Credit Wages Payable",
          "Debit Wages Payable; Credit Wages Expense",
          "Debit Cash; Credit Wages Expense",
          "Debit Prepaid Wages; Credit Cash"
        ],
        correctAnswer: "A",
        explanation: "The wages are an expense now, and the unpaid amount is a liability."
      },
      {
        id: "adj-005",
        question: "Depreciation is used to allocate the cost of what type of asset?",
        choices: ["Cash", "Accounts Receivable", "Long-term fixed asset", "Accounts Payable"],
        correctAnswer: "C",
        explanation: "Depreciation spreads the cost of long-term assets over the periods they help generate revenue."
      },
      {
        id: "adj-006",
        question: "Prepaid insurance is initially an asset. As time passes, what account is usually debited?",
        choices: ["Insurance Expense", "Cash", "Insurance Revenue", "Accounts Receivable"],
        correctAnswer: "A",
        explanation: "As the prepaid coverage is used, it becomes Insurance Expense."
      },
      {
        id: "adj-007",
        question: "Interest earned but not yet received should usually be recorded as what?",
        choices: [
          "Debit Interest Receivable; Credit Interest Revenue",
          "Debit Cash; Credit Interest Receivable",
          "Debit Interest Expense; Credit Cash",
          "Debit Interest Revenue; Credit Interest Payable"
        ],
        correctAnswer: "A",
        explanation: "The business earned revenue and has a receivable because cash has not been collected yet."
      }
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
      {
        id: "fs-001",
        question: "Which financial statement reports revenues and expenses for a period of time?",
        choices: ["Balance Sheet", "Income Statement", "Statement of Cash Flows", "Trial Balance"],
        correctAnswer: "B",
        explanation: "The income statement reports revenues, expenses, and net income or net loss."
      },
      {
        id: "fs-002",
        question: "Which statement reports assets, liabilities, and equity on a specific date?",
        choices: ["Income Statement", "Balance Sheet", "Statement of Retained Earnings", "Sales Report"],
        correctAnswer: "B",
        explanation: "The balance sheet shows what the business owns, owes, and has in equity."
      },
      {
        id: "fs-003",
        question: "If revenues are greater than expenses, the business has what result?",
        choices: ["Net loss", "Net income", "Owner withdrawal", "Unearned revenue"],
        correctAnswer: "B",
        explanation: "Net income occurs when revenues are higher than expenses."
      },
      {
        id: "fs-004",
        question: "Which account normally appears on the balance sheet?",
        choices: ["Rent Expense", "Service Revenue", "Cash", "Utilities Expense"],
        correctAnswer: "C",
        explanation: "Cash is an asset, and assets appear on the balance sheet."
      },
      {
        id: "fs-005",
        question: "Which statement helps explain changes in cash during a period?",
        choices: ["Income Statement", "Statement of Cash Flows", "Chart of Accounts", "Bank Deposit Slip"],
        correctAnswer: "B",
        explanation: "The statement of cash flows explains cash inflows and outflows."
      },
      {
        id: "fs-006",
        question: "Which financial statement is usually prepared first?",
        choices: ["Income Statement", "Balance Sheet", "Statement of Cash Flows", "Statement of Owner Withdrawals"],
        correctAnswer: "A",
        explanation: "The income statement is usually prepared first because net income is needed for equity statements."
      },
      {
        id: "fs-007",
        question: "Where would Accounts Payable usually appear?",
        choices: ["Income Statement as revenue", "Balance Sheet as a liability", "Balance Sheet as an asset", "Income Statement as an expense"],
        correctAnswer: "B",
        explanation: "Accounts Payable is a liability because the business owes money to others."
      }
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
      {
        id: "mab-001",
        question: "Who mainly uses managerial accounting information?",
        choices: ["Internal managers", "Only the IRS", "Only stockholders", "Only banks"],
        correctAnswer: "A",
        explanation: "Managerial accounting is mainly used by internal managers to make business decisions."
      },
      {
        id: "mab-002",
        question: "Managerial accounting is often used for what purpose?",
        choices: ["Planning and decision-making", "Preparing personal tax returns only", "Replacing bookkeeping", "Printing checks only"],
        correctAnswer: "A",
        explanation: "Managers use this information to plan, control costs, and make decisions."
      },
      {
        id: "mab-003",
        question: "Which report is commonly used in managerial accounting?",
        choices: ["Budget", "Birth certificate", "Personal resume", "Sales receipt only"],
        correctAnswer: "A",
        explanation: "Budgets help managers plan expected income, costs, and activity."
      },
      {
        id: "mab-004",
        question: "Managerial accounting reports are usually prepared how often?",
        choices: ["Only once every 10 years", "As often as managers need them", "Only at tax time", "Never"],
        correctAnswer: "B",
        explanation: "Managerial reports can be prepared daily, weekly, monthly, or whenever useful."
      },
      {
        id: "mab-005",
        question: "Which topic is common in managerial accounting?",
        choices: ["Product costs", "Personal credit score", "Mortgage approval only", "Stock market trading only"],
        correctAnswer: "A",
        explanation: "Managerial accounting often studies product costs and how they affect business decisions."
      },
      {
        id: "mab-006",
        question: "A budget compares expected amounts to what?",
        choices: ["Actual results", "Only old invoices", "The owner's age", "The bank name"],
        correctAnswer: "A",
        explanation: "Comparing budgeted and actual results helps managers spot differences and adjust."
      },
      {
        id: "mab-007",
        question: "Which phrase best describes managerial accounting?",
        choices: [
          "Future-focused and decision-focused",
          "Only for outside investors",
          "Only for filing taxes",
          "Never uses estimates"
        ],
        correctAnswer: "A",
        explanation: "Managerial accounting often looks forward and helps managers make decisions."
      }
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
      {
        id: "cb-001",
        question: "Which cost usually stays the same in total when activity changes within the relevant range?",
        choices: ["Variable cost", "Fixed cost", "Direct material cost", "Sales commission"],
        correctAnswer: "B",
        explanation: "A fixed cost stays the same in total within the relevant range."
      },
      {
        id: "cb-002",
        question: "A cost that changes in total as production volume changes is called what?",
        choices: ["Fixed cost", "Variable cost", "Period cost", "Sunk cost"],
        correctAnswer: "B",
        explanation: "Variable costs change in total as activity changes."
      },
      {
        id: "cb-003",
        question: "Factory rent is most likely which type of cost?",
        choices: ["Fixed cost", "Variable cost", "Direct material", "Sales discount"],
        correctAnswer: "A",
        explanation: "Factory rent usually does not change just because more or fewer units are produced."
      },
      {
        id: "cb-004",
        question: "Direct materials used to make each product are usually what type of cost?",
        choices: ["Fixed", "Variable", "Sunk", "Administrative"],
        correctAnswer: "B",
        explanation: "Direct materials usually increase when more units are made."
      },
      {
        id: "cb-005",
        question: "A mixed cost contains which two parts?",
        choices: ["Revenue and expenses", "Assets and liabilities", "Fixed and variable components", "Cash and credit components"],
        correctAnswer: "C",
        explanation: "Mixed costs have both a fixed part and a variable part."
      },
      {
        id: "cb-006",
        question: "If total variable cost is $2 per unit, what is the total variable cost for 100 units?",
        choices: ["$2", "$50", "$100", "$200"],
        correctAnswer: "D",
        explanation: "Multiply $2 per unit by 100 units to get $200."
      },
      {
        id: "cb-007",
        question: "Which cost is most likely variable for a delivery company?",
        choices: ["Monthly office rent", "Fuel used for deliveries", "Annual insurance policy", "Manager salary"],
        correctAnswer: "B",
        explanation: "Fuel often changes with the number and distance of deliveries."
      }
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
      {
        id: "exa-001",
        question: "What symbol starts a formula in Excel?",
        choices: ["#", "=", "@", "$"],
        correctAnswer: "B",
        explanation: "Excel formulas begin with an equals sign."
      },
      {
        id: "exa-002",
        question: "Which formula adds the values in cells A1 through A5?",
        choices: ["=ADD(A1:A5)", "=SUM(A1:A5)", "=TOTAL(A1-A5)", "=A1+A5 ONLY"],
        correctAnswer: "B",
        explanation: "SUM adds all numbers in a selected range."
      },
      {
        id: "exa-003",
        question: "Which formula finds the average of cells B2 through B6?",
        choices: ["=AVG(B2:B6)", "=AVERAGE(B2:B6)", "=MEAN(B2-B6)", "=SUM(B2:B6)/B6"],
        correctAnswer: "B",
        explanation: "AVERAGE calculates the average of the numbers in a range."
      },
      {
        id: "exa-004",
        question: "Which cell reference is absolute?",
        choices: ["A1", "$A$1", "A$1B", "ABS(A1)"],
        correctAnswer: "B",
        explanation: "Dollar signs lock the column and row, making $A$1 absolute."
      },
      {
        id: "exa-005",
        question: "Which Excel feature arranges rows from smallest to largest?",
        choices: ["Filter", "Sort", "Wrap Text", "Freeze Panes"],
        correctAnswer: "B",
        explanation: "Sort changes the order of rows based on the selected column."
      },
      {
        id: "exa-006",
        question: "What does Freeze Panes help you do?",
        choices: [
          "Keep headings visible while scrolling",
          "Delete formulas permanently",
          "Change every number to text",
          "Lock the workbook from opening"
        ],
        correctAnswer: "A",
        explanation: "Freeze Panes keeps selected rows or columns visible while you scroll."
      },
      {
        id: "exa-007",
        question: "Why is currency formatting helpful in accounting worksheets?",
        choices: [
          "It makes dollar amounts easier to read",
          "It removes all formulas",
          "It changes debits into credits",
          "It hides negative numbers automatically"
        ],
        correctAnswer: "A",
        explanation: "Currency formatting makes money amounts clearer and more professional."
      }
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
      {
        id: "pb-001",
        question: "What is the main purpose of a personal budget?",
        choices: ["To plan how income will be used", "To avoid tracking expenses", "To increase debt", "To skip saving"],
        correctAnswer: "A",
        explanation: "A budget is a plan for income, spending, saving, and financial goals."
      },
      {
        id: "pb-002",
        question: "Which item is usually a fixed expense?",
        choices: ["Monthly rent", "Restaurant spending", "Movie tickets", "Holiday gifts"],
        correctAnswer: "A",
        explanation: "Rent is usually the same amount each month, so it is a fixed expense."
      },
      {
        id: "pb-003",
        question: "Which item is usually a variable expense?",
        choices: ["Car insurance premium", "Rent", "Groceries", "Student loan minimum payment"],
        correctAnswer: "C",
        explanation: "Groceries can change from week to week, making them a variable expense."
      },
      {
        id: "pb-004",
        question: "If income is $2,000 and expenses are $1,750, how much is left over?",
        choices: ["$150", "$200", "$250", "$350"],
        correctAnswer: "C",
        explanation: "Subtract expenses from income: $2,000 - $1,750 = $250."
      },
      {
        id: "pb-005",
        question: "What does it mean to pay yourself first?",
        choices: [
          "Put money toward savings before optional spending",
          "Spend all income immediately",
          "Pay only the smallest bill",
          "Use credit before cash"
        ],
        correctAnswer: "A",
        explanation: "Paying yourself first means treating savings like a priority."
      },
      {
        id: "pb-006",
        question: "Which budget category should usually include emergency fund contributions?",
        choices: ["Savings", "Entertainment", "Interest expense", "Late fees"],
        correctAnswer: "A",
        explanation: "Emergency fund contributions are savings for unexpected expenses."
      },
      {
        id: "pb-007",
        question: "What is a good reason to track spending?",
        choices: [
          "To see where money is actually going",
          "To make all bills disappear",
          "To avoid making decisions",
          "To increase every expense"
        ],
        correctAnswer: "A",
        explanation: "Tracking spending helps you compare actual habits to your budget plan."
      }
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
      {
        id: "qb-001",
        question: "What is bookkeeping mainly used for?",
        choices: [
          "Recording and organizing business financial transactions",
          "Designing a company logo",
          "Replacing all bank accounts",
          "Avoiding financial records"
        ],
        correctAnswer: "A",
        explanation: "Bookkeeping keeps track of business transactions so records and reports are accurate."
      },
      {
        id: "qb-002",
        question: "In QuickBooks, an invoice is usually used when what happens?",
        choices: [
          "A customer needs to be billed",
          "A vendor gives a discount only",
          "The owner changes the password",
          "A bank account is closed"
        ],
        correctAnswer: "A",
        explanation: "An invoice tells a customer what they owe for goods or services."
      },
      {
        id: "qb-003",
        question: "A bill in bookkeeping usually represents what?",
        choices: [
          "Money the business owes to a vendor",
          "Money a customer owes the business",
          "Owner investment only",
          "A sales receipt only"
        ],
        correctAnswer: "A",
        explanation: "A bill records an amount the business owes to someone else."
      },
      {
        id: "qb-004",
        question: "What is the purpose of bank reconciliation?",
        choices: [
          "To compare bookkeeping records to the bank statement",
          "To delete all old transactions",
          "To increase revenue automatically",
          "To replace invoices with bills"
        ],
        correctAnswer: "A",
        explanation: "Reconciliation checks that your records match the bank's records."
      },
      {
        id: "qb-005",
        question: "Which report commonly shows whether a business made money during a period?",
        choices: ["Profit and Loss", "Vendor Contact List", "Check Register Only", "Password Report"],
        correctAnswer: "A",
        explanation: "A Profit and Loss report shows income, expenses, and profit or loss."
      },
      {
        id: "qb-006",
        question: "What should you do before categorizing a bank feed transaction?",
        choices: [
          "Review what the transaction is for",
          "Always mark it as revenue",
          "Delete it immediately",
          "Change the business name"
        ],
        correctAnswer: "A",
        explanation: "You should understand the transaction before choosing the correct account category."
      },
      {
        id: "qb-007",
        question: "Which account type is usually used for money owed by customers?",
        choices: ["Accounts Receivable", "Accounts Payable", "Owner's Draw", "Utilities Expense"],
        correctAnswer: "A",
        explanation: "Accounts Receivable tracks money customers owe to the business."
      }
    ]
  }
];
