mygcd :: Num a => (a, a) -> a
mygcd (a, b) = a + b

main = do
  a <- readLn
  b <- readLn
  print $ mygcd (a, b)