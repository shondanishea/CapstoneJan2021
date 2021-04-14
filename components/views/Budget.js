import html from "html-literal";

export default (st) => html `


<div class="container">
      <div class="header">
        <h1>Coming Soon Create a Budget</h1>
      </div>
      <div class="budget-section">
        <div class="budget col col-md col-sm">
          <h2>budget</h2>
          <img src="https://ghh-trikrollc.netdna-ssl.com/wp-content/uploads/2015/07/money-bag-tests-cost-money-to-run.png" width="40"  alt= "moneyBag"/>
          <p class="amount">$ <span id="budgetAmount">0</span></p>
        </div>
        <div class="expenses col col-md col-sm">
          <h2>expenses</h2>
          <img src="https://www.mariowiki.com/images/4/43/Mariocalculator.jpg" width="40" alt="" />
          <p class="exp-amount">$ <span id="expensesAmount">0</span></p>
        </div>
        <div class="balance col col-md col-sm">
          <h2>balance</h2>
          <img src="http://www.investitwisely.com/wordpress/wp-content/uploads/2012/03/Balance_scale_gold_cdn_usd2.png" width="40" alt="" />
          <p class="amount bala">$ <span id="balanceAmount">0</span></p>
<div class="budget-form" id="budget-form">
    <form id="addForm">
      <label for=""> Make a budget</label> <br />
      <input type="number" id="number" /> <br />
      <button type="submit">Add Budget</button>
    </form>
<div class="expense-form" id="expense-form">
  <form action="" id="expForm">
  <form id="addForm2">
      <label for="">Total Expenses</label> <br />
      <input type="number" id="number" /> <br />
      <button type="submit">Add Expenses</button>
    </form>
    </div>
      </div>
    </div>
  </div>
</div>
`;
