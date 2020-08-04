describe("Account number", function(){
    let account = new Account(1);
    it("retrieves the account number", function(){
        assert.equal(1, account.getNumber());
    });
});

describe("Balance", function(){
    let account = new Account(2);
    it("retrieves the current balance", function(){
        assert.equal(0.0, account.getBalance());
    });
});


describe("Desposit", function () {
    let account = new Account(3);
    account.deposit(100);
    it("Change the balance, which add money",
        function () {
            assert.equal(100, account.getBalance());
        });
});


describe("Withdraw", function () {
    let acc = new Account(4);
    acc.deposit(200);
    acc.withdraw(100);
    it("decreases amount", function(){
        assert.equal(100, acc.getBalance());
    });

    it("negative amount", function(){
        assert.throw(()=> {acc.withdraw(-100)}, RangeError, "Withdraw amount has to be greater than zero");
    });
});

describe("ToString", function(){
    let account = new Account(7);
    account.deposit(200);
    it("returns the string account", function(){
        assert.equal("Account 7: balance 200", account.toString());
    });
});


describe("Savings", function(){
    let account = new SavingsAccount(8, 5);
    account.deposit(100);
    account.addInterest();

    it("adds the interest amount", function(){
        assert.equal(105, account.getBalance());
    });

    it("returns the toString savings account ", function(){
        assert.equal("Saving Account 8: balance 105, Interest 5", account.toString());
    });
});

//withdraw from checking account
describe("Checking Account", function(){
    let account = new CheckingAccount(9, 100);
    account.deposit(200);

    it("withdraw amount is greater than current balance", function(){
        assert.throw(()=>{account.withdraw(1000)}, Error, "Insufficient funds.");
    });

    account.withdraw(300);
    it("withdraw amount is less than current balance", function(){
        assert.equal(-100, account.getBalance());
    });
});

describe("Bank", function(){
    it("adds a new Account", function(){
        let bank = new Bank();
        bank.addAccount();
        assert.equal(1, bank.getAccounts().length);
        assert.equal(1, bank.getAccounts()[0].getNumber()); // account number starts from 1

        bank.addSavingsAccount(25);
        assert.equal(2, bank.getAccounts().length);

        bank.addCheckingAccount(100);
        assert.equal(3, bank.getAccounts().length);
    });

    it("deletes an account", function(){
        let bank = new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();

        bank.getAccounts().forEach(account => {
            console.log(account.getNumber());
        });

        assert.equal(3, bank.getAccounts().length);
        assert.equal(2, bank.closeAccount(bank.getAccounts()[0].getNumber()));
        assert.equal(2, bank.getAccounts().length);
    });

    it("creates an account report. ", function(){
        let bank1 = new Bank();
        bank1.addAccount();
        bank1.addCheckingAccount(100);
        bank1.addSavingsAccount(200);

        assert.equal("Account 7: balance 0\nChecking Account 8: balance 0, Overdraft 100\nSaving Account 9: balance 0, Interest 200\n", bank1.accountReport());
    });
});


describe("End of month", function(){
    it("returns accounts end of month", function(){
        let bank2 = new Bank();
        bank2.addAccount();
        bank2.addSavingsAccount(25);
        bank2.getAccounts()[1].deposit(100);

        bank2.addCheckingAccount(100);
        bank2.getAccounts()[2].withdraw(50);

        assert.equal("\nInterest added Savings Account: 11 balance: 125 interest: 25\nWarning, low balance CheckinAccount 12: balance: -50 overdraft limit: 100\n", bank2.endOfMonth());
    });
});

