#[derive(Debug)]
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    age: u64,
    active: bool,
}

impl User {
    fn area(&self) -> u64 {
        self.age * self.sign_in_count
    }
}

fn main() {
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
        age: 2,
    };

    println!("Hello, world! {:?}", user1);
    println!("result: {}", user1.area());
}
