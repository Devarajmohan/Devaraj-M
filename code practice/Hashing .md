              Hashing 


Link:

https://www.geeksforgeeks.org/hashing-data-structure/

https://kaliyappan-r.web.app/

what is Hashing:


=>Hashing refers to the process of generating a fixed-size output from an input of variable size using the mathematical formulas known as hash functions. This technique determines an index or location for the storage of an item in a data structure.



Components of Hashing:


There are majorly three components of hashing:

=> Key: A Key can be anything string or integer which is fed as input in the hash function the technique that determines an index or location for storage of an item in a data structure.

=>Hash Function: The hash function receives the input key and returns the index of an element in an array called a hash table. The index is known as the hash index .

=>Hash Table: Hash table is a data structure that maps keys to values using a special function called a hash function. Hash stores the data in an associative manner in an array where each data value has its own unique index.



What is Collision:

=>Collision in Hashing occurs when two different keys map to the same hash value. Hash collisions can be intentionally created for many hash algorithms. The probability of a hash collision depends on the size of the algorithm, the distribution of hash values and the efficiency of Hash function.

How to handle Collisions:

There are mainly two methods to handle collision:

1.Separate Chaining [ it is like lined list concepts. collison the one or more value in column vice.]

2.Open Addressing.

  2.1. linear probing [collising the value one by one ].

  2.2. Qudratic probing [collising the value same of both value DOUBLE THE VALUE [H  + 1  2  ,  H  + 2  2  ,  H  + 3  2  ,  H  + 4  2  ………………….  H  + k  2 ]].

  2.3.Double hashing [its double the value of both are same]


   formula:

      new_index=(h1(key)+i×h2(key))%table_size


      //