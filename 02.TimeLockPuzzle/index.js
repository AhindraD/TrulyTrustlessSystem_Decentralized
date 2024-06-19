import Puzzle from "crypto-puzzle";

async function main() {
    const PUZZLE = await Puzzle.generate({
        /* OPTIONAL OPTIONS */
        "primeBits": 100, // Number of bits of entropy that the two internally generated primes will have
        "primeRounds": 6, // Number of Miller-Rabin primality checks that the prime numbers will have to pass
        "opsPerSecond": 3_300_000, // Rough number of operations per second that the attacker/receiver can perform, 3.3M is around what a MBP M1 Max can do

        /* REQUIRED OPTIONS */
        "duration": 10_000, // Rough minimum number of milliseconds that this puzzle will be unsolvable for
        "message": "lorem ipsum dolor sit amet" // Message to encrypt inside the puzzle
    });

    // Now let's solve the puzzle
    const solution = await Puzzle.solve(PUZZLE);
    console.log('waiting for 10 seconds...');
    

    // About 10 seconds later...
    console.log(solution); // Prints "lorem ipsum dolor sit amet"
}

main();