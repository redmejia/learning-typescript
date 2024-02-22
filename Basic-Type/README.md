# TypeScript Types 

When you declare a variable, you can also specify its type. This helps TypeScript catch and prevent type mismatches during development.

## Basics Types
string: Represents sequences of text characters.

number: Represents floating-point and integer numbers.

boolean: Represents true or false values.

## Compound Types
array: Represents an ordered collection of values of the same type.


tuple: Represents an ordered collection of values of specific types and fixed length.


enum: Represents a set of named constants.


object: Represents unordered collections of key-value pairs.


interface: Defines the shape of an object, specifying required and optional properties with their types.

## Example
string “Alice” | \`Hello` | 'World'\
number 90 | 8.0\
boolean true | false

## Compound Types
array [1,9,10, 87]\
tuple [“Alice”, 31] \
object {name: “Alice”, age: 54}\
interface {name: string, lastName?: string }
