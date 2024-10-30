function isValidPassword(password, username) {
    // Şifre en az 8 karakter olmalı, boşluk içermemeli ve kullanıcı adını içermemeli
    if (password.length >= 8 && !password.includes(' ') && !password.includes(username)) {
      return true;
    }
    return false;
  }
  
  // Örnek kullanım
  console.log(isValidPassword("mySecurePass", "user123")); // true
  console.log(isValidPassword("short", "user123"));        // false (en az 8 karakter olmalı)
  console.log(isValidPassword("password with space", "user123")); // false (boşluk içeriyor)
  console.log(isValidPassword("username123", "user123"));  // false (kullanıcı adını içeriyor)
  