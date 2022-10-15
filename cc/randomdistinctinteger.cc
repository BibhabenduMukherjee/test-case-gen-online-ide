#include "../headers/tests.h"
using namespace std;

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


int main(int argc , char* argv[]){
    int size = atoi(argv[1]);
    int upper = atoi(argv[2]);
    int timer = atoi(argv[3]);
   registerGen(argc, argv,1);
   for(int i = 0 ; i < timer; i++){
   vector<int> a =  rnd.distinct(size , upper);
    string s = serializerVectorInt(a);
    println(s);
   }
   
}