# g++ randomToken.cc -o out && wc -w < ouf.txt > lenofinputlinecheck.txt && ./out lenofinputlinecheck.txt ouf.txt ans.txt && echo " -- number scanned"

# for (( i = 10 ; i < 20  ; i++ ))
# do 
#   j=("$i" * 2)
#   z=("$j" * 3)
#   echo "$j"
#   g++ randomToken.cc -o out && ./out "$i" "$j" "$z"
# done

for file in cmd/*; do
  if [ -f "$file" ]; then 
      chmod +x $file
  fi
done