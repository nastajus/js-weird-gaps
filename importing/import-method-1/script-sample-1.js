function User() {
    this._firstName;
    this._lastName;

    this.FirstName = function(firstName) {
        this._firstName = firstName;
        return this;
    }

    this.LastName = function(lastName) {
        this._lastName = lastName;
        return this;
    }

    this.Name = function() { return (this._firstName + " " + this._lastName).trim(); }
}