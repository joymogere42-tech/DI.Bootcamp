class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []   # to store call records
        self.messages = []       # to store messages

    # Method to make a call to another Phone object
    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)
        other_phone.call_history.append(call_record)  # optional: record on receiver too

    # Show call history
    def show_call_history(self):
        print(f"Call history of {self.phone_number}:")
        for record in self.call_history:
            print(record)

    # Send message to another Phone object
    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message)  # save on receiver too
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}: {content}")

    # Show outgoing messages
    def show_outgoing_messages(self):
        print(f"Outgoing messages from {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"To {msg['to']}: {msg['content']}")

    # Show incoming messages
    def show_incoming_messages(self):
        print(f"Incoming messages for {self.phone_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"From {msg['from']}: {msg['content']}")

    # Show messages from a specific number
    def show_messages_from(self, number):
        print(f"Messages for {self.phone_number} from {number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number and msg["from"] == number:
                print(msg["content"])


# ------------------- TEST -------------------

# Create two phones
phone1 = Phone("123-456-7890")
phone2 = Phone("987-654-3210")

# Test calls
phone1.call(phone2)
phone2.call(phone1)

# Show call histories
phone1.show_call_history()
phone2.show_call_history()

# Test messages
phone1.send_message(phone2, "Hello, how are you?")
phone2.send_message(phone1, "I'm good, thanks!")

# Show messages
phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from("987-654-3210")
phone2.show_outgoing_messages()
phone2.show_incoming_messages()
phone2.show_messages_from("123-456-7890")