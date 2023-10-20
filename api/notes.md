model User {
  id         String   @id @default(uuid())
  email      String   @unique
  name       String
  password   String
  grau_form  String
  temp_form  String
  qtd_mat    Float
  dat_inicio DateTime
  dat_final  DateTime

  @@map("users")
}

model Cornell {
  id         Int    @id @default(autoincrement())
  materia    String
  idea_princ String
  notes      String
  resume     String

  @@map("cornell")
}

model FlashCards {
  id      Int    @id @default(autoincrement())
  materia String
  resume  String
}





HTPPP -----

"grau_form": "Ensino fundamental",
  "temp_form": "Dois anos",
  "qtd_mat": 10,
  "dat_inicio": "2023-10-18T16:45:00",
  "dat_final": "2023-10-22T16:45:00"
