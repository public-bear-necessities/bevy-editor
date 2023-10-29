extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn say_hello() -> String {
    "Hello from Rust!".to_string()
}