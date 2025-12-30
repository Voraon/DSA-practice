class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        HashMap<Character, Integer> map = new HashMap<>();
        int l=0,r=0, ans=0;
        if(n ==0) return ans;
       while(r<n){
        if(map.containsKey(s.charAt(r))){
            l= Math.max(map.get(s.charAt(r))+1,l);
        }
        map.put(s.charAt(r),r);
        ans= Math.max(ans, r-l+1);
        r++;
       }
       return ans;
    }
}