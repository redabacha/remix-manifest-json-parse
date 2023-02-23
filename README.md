run `npm install` and then `node ./benchmark.mjs`.
results:

1 route:

```
Creating test manifest with 1 route(s)
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v18.14.2 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
with JSON.parse     295.92 µs/iter   (234.14 µs … 2.89 ms) 284.97 µs 687.12 µs    1.8 ms
without JSON.parse  299.83 µs/iter     (237 µs … 11.39 ms) 295.57 µs 595.19 µs 890.69 µs

summary
  with JSON.parse
   1.01x faster than without JSON.parse
```

10 routes:

```
Creating test manifest with 10 route(s)
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v18.14.2 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
with JSON.parse     289.49 µs/iter   (239.25 µs … 2.75 ms)  281.8 µs 633.35 µs   1.75 ms
without JSON.parse  290.12 µs/iter   (247.82 µs … 2.23 ms) 277.33 µs 595.79 µs    1.9 ms

summary
  with JSON.parse
   1x faster than without JSON.parse
```

100 routes:

```
Creating test manifest with 100 route(s)
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v18.14.2 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
with JSON.parse     461.36 µs/iter   (391.85 µs … 3.36 ms)  460.6 µs   1.19 ms   1.84 ms
without JSON.parse  591.14 µs/iter   (536.34 µs … 3.62 ms)  593.3 µs 831.95 µs   1.07 ms

summary
  with JSON.parse
   1.28x faster than without JSON.parse
```

1000 routes:

```
Creating test manifest with 1000 route(s)
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v18.14.2 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
with JSON.parse       1.64 ms/iter     (1.39 ms … 5.75 ms)   1.52 ms   5.29 ms    5.6 ms
without JSON.parse    2.97 ms/iter        (2.78 ms … 6 ms)   2.96 ms   5.58 ms      6 ms

summary
  with JSON.parse
   1.81x faster than without JSON.parse
```

10000 routes:

```
Creating test manifest with 10000 route(s)
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v18.14.2 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
with JSON.parse      14.78 ms/iter    (12.6 ms … 23.62 ms)  13.13 ms  23.62 ms  23.62 ms
without JSON.parse   28.62 ms/iter   (26.75 ms … 39.33 ms)  28.06 ms  39.33 ms  39.33 ms

summary
  with JSON.parse
   1.94x faster than without JSON.parse
```
