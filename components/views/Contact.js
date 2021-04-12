import html from "html-literal";

export default (st) => html `
<div class="container">
  <div style="text-align:center">
    <h2>Contact Us</h2>
    <p>Leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
    </div>
    <div class="column">
      <form id="my-form" action="https://formspree.io/f/xoqpzowr" method= "POST">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Request More Information</label>
        <textarea id="subject" name="subject" placeholder="Write Email and information need.." style="height:170px"></textarea>
        <input type="submit" value="Submit" target="_blank">
        <h1 id="my-form-status"></h1>
      </form>
    </div>
  </div>
</div>
`;
