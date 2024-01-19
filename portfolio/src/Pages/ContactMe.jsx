const ContactMe = () => {
  return (
    <section id="contact" className="contact--section">
      <div>
        <p className="sub-title">Get in touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          quisquam!
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <input
            type="text"
            className="contact--input text-md"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            className="contact--input text-md"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            className="contact--input text-md"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="number"
            className="contact--input text-md"
            name="Number"
            id="Number"
            placeholder="Contact"
            required
          />
          <div>
            <select id="topic" className="contact--input text-md">
              <option disabled selected>
                Select a topic
              </option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </div>
          <textarea
            name="message"
            id="message"
            rows="8"
            className="contact--input text-md"
            placeholder="Enter your message here"
          ></textarea>
          <div className="submit--container">
            <div className="checkbox--container">
              <input type="checkbox" required name="checkbox" id="checkbox" />
              <span className="text-sm">I accept the terms and conditions</span>
            </div>
            <div>
              <button className="btn btn-primary contact--form--btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
