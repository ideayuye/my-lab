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

#[derive(Debug)]
enum IpAddrKind {
    V4,
    V6
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => {
            println!("just test");
            1
        },
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
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

    let six = IpAddrKind::V6;
    println!("values: {:?}", six);

    let res = value_in_cents(Coin::Penny);
    println!("enum match {}", res);
}
