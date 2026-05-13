return (

  <div style={{ padding: "20px" }}>

    <form>

      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={this.state.firstName}
        onChange={this.handleChange}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={this.state.lastName}
        onChange={this.handleChange}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        name="age"
        value={this.state.age}
        onChange={this.handleChange}
      />

    </form>

  </div>
);