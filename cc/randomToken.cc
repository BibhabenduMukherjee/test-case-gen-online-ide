#include "headers/tests.h"
#include <vector>
using namespace std;
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



string serializerVectorInt(vector<int> &a){
  int size = a.size();
  string ans = "[";
  for(int i = 0 ; i < size ; i++){
    ans+=to_string(a[i])+',';
  }
  ans.pop_back();
  ans+="]";
  return ans;
}

// int main(int argc , char* argv[]){
//     int size = atoi(argv[1]);
//     int upper = atoi(argv[2]);
//     int timer = atoi(argv[3]);
//    registerGen(argc, argv,1);
//    for(int i = 0 ; i < timer; i++){
//    vector<int> a =  rnd.distinct(size , upper);
//     string s = serializerVectorInt(a);
//     println(s);
//    }
   
// }

void writeTest(int test, int count){
  startTest(test);
  vector<string> ans;
   
   pattern *p = new pattern("[0-1]{3,100000}");
   for(int i = 0 ; i < count ; i++){
  string a = p->next(rnd);
    ans.push_back(a);
   }
 
   println(ans);
}

int main(int argc, char* argv[]){
   registerGen(argc, argv,1);
int count = atoi(argv[1]);
    for(int i = 0 ; i < 2 ; i++){
      writeTest(i,count);
    }

 
 
}



//  int main(int argc, char* argv[]) {

//     registerTestlibCmd(argc, argv);
//       int size = inf.readInt(-20000,20000);
//       std::cout << size << " ";
//     std::vector<int> pans = ouf.readInts(size,-20000, 20000);

//     std::vector<int> jans = ans.readInts(size,-20000,20000); // We suppose that jury's answer is correct
//     std::cout << jans.size();
//     for(int i = 0  ; i < size ; i++){
//    if (pans[i] != jans[i]){
//    quitf(_wa, "The sum is wrong: expected = %d, found = %d", jans[i], pans[i]);
//    }
      
        
//     }
//      quitf(_ok, "The sq is correct.");
   
// }



// int main(int argc, char  *argv[])
// {
//     registerGen(argc, argv, 1);
//     int le = rnd.next(1000,2000);
//     println(le);
//     return 0;
// }

 

