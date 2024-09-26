#include<bits/stdc++.h>
using namespace std;
main()
{
    unordered_map<string,int>mp1;
    //method1 for insertion
    pair<string,int>p=make_pair("Rishi",1);
    mp1.insert(p);
    //method 2 for insertion
    pair<string,int>pair2("Rishi",1);
    mp1.insert(pair2);
    //method 3
    mp1["Rishit"]=2;
     mp1["Rishit"]=2;
      mp1["Rishit"]=1;
    mp1["shyam"]=3;
    mp1["manoj"]=7;
    //searching
    cout<<mp1["Rishi"]<<endl;
    cout<<mp1.at("Rishit")<<endl;
    //size
    cout<<mp1.size()<<endl;
    //to check presence
    cout<<mp1.count("Rishit")<<endl;
    //erase 
    mp1.erase("Rishit");
    cout<<mp1.size()<<endl;
    //traversing 1
    for(auto i:mp1)
    {
         cout<< i.first<<" "<< i.second<<endl;
    }
    //traversing 2 using iterators
    unordered_map<string,int>::iterator it=mp1.begin();
    while(it!=mp1.end())
    {
        cout<<it->first<<" "<<it->second<<endl;
        it++;
    }
}