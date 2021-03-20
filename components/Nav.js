import html from "html-literal";
export default (links) =>`
<nav>
      <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
      ${links
      .map(
        (link) => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
      )
      .join()}
      <li>Vision Financial Dreams</li>
      <li><a href="#home">Home</a></li>
      <li><a href="#credit">Credit Score</a></li>
      <li><a href="#budget">Budgeting & Savings</a></li>
      <li><a href="#coupon">Couponing</a></li>
  </ul>

</nav>
`;
