#include "tests.h"
#include <bits/stdc++.h>
//  void writeTest(int test) {
//     startTest(test);


//      for(int i =  0 ; i < 20  ; i++  ){
//            int a = rnd.next(1, 10 * 10);
//            int b = rnd.next(1, 10 * 10);
//            println(a, b);
//      }
   
// }

// int main(int argc, char *argv[]) {
//     registerGen(argc, argv, 1);

//     for (int i = 1; i <= 5; i++)
//         writeTest(i);
// }


int main(int argc, char* argv[]) {
    // This command initializes checker environment.
    registerTestlibCmd(argc, argv);
      int size = inf.readInt(-20000,20000);
      std::cout << size << " ";
    std::vector<int> pans = ouf.readInts(size,-2000, 2000);
  
    // This function reads a single integer from the jury output. Here we suppose
    // that jury's answer is correct and we do not need to additionally verify it.
    std::vector<int> jans = ans.readInts(size,-2000,2000); // We suppose that jury's answer is correct
    std::cout << jans.size();
    for(int i = 0  ; i < size ; i++){
   if (pans[i] != jans[i]){
   quitf(_wa, "The sum is wrong: expected = %d, found = %d", jans[i], pans[i]);
   }
      
        
    }
     quitf(_ok, "The sq is correct.");
   
}

 

