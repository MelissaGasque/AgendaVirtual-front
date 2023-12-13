import { z } from "zod"

export const SchemaLogin = z.object({
    username: z
    .string().min(1, "O nome de usuário é obrigatório!"),
    
    password:
    z.string()
    .min(4, "A senha é obrigatória"),
})

export const SchemaRegister = z.object({
    full_name: z
      .string()
      .min(5, "O nome é obrigatório")
      .max(40, "Não pode passar de 40 caracteres"),
  
    username: z
      .string()
      .min(1, "O nome de usuário é obrigatório")
      .max(15, "Não pode passar de 15 caracteres"),
  
    email: z
      .string()
      .min(4, "O email é obrigatório")
      .email("Formato de e-mail inválido"),
  
    phone_number: z
      .string()
      .min(1, "O telefone é obrigatório") 
      .max(15, "Não pode passar de 15 caracteres"),
  
    password: z
      .string()
      .min(4, "A senha é obrigatória e precisa ter no mínimo 4 caracteres")
      .max(70, "Não pode passar de 70 caracteres"),
  
    confirm: z
      .string()
      .min(4, "Confirme a senha"),
  
    admin: z
      .string()
      .nullable()

}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
})

// export const SchemaModalCreate = z.object({
//     title: z.string().nonempty("Adicionar a tecnologia é obrigatório"),
    
//     status: z.string().nonempty("Escolher o status é obrigatório")
// })

// export const SchemaModalEditDelet = z.object({
//     status: z.string().nonempty("Escolher o status é obrigatório"),
// })