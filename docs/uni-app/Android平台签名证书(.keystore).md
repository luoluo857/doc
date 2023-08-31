

# Android平台签名证书(.keystore)

首先要有Java环境

```
keytool -genkey -alias 自定义 -keyalg RSA -keysize 2048 -validity 36500 -keystore 自定义.keystore
```

```
Enter keystore password:  //输入密码，输入完成回车  
Re-enter new password:   //再次输入密码，输入完成回车  
What is your first and last name?  
  [Unknown]:  //输入名字和姓氏，输入完成回车  
What is the name of your organizational unit?  
  [Unknown]:  //输入组织单位名称，输入完成回车  
What is the name of your organization?  
  [Unknown]:  //输入组织名称，输入完成回车  
What is the name of your City or Locality?  
  [Unknown]:  //输入城市或区域名称，输入完成回车  
What is the name of your State or Province?  
  [Unknown]:  //输入省/市/自治区名称，输入完成回车  
What is the two-letter country code for this unit?  
  [Unknown]:  //输入国家/地区代号（两个字母），中国为CN，输入完成回车  
Is CN=XX, OU=XX, O=XX, L=XX, ST=XX, C=XX correct?  
  [no]:  //确认上面输入的内容是否正确，输入y，回车  

Enter key password for <testalias>  
        (RETURN if same as keystore password):  //确认证书密码与证书文件密码一样（HBuilder|HBuilderX要求这两个密码一致），直接回车就可以
```

```
keytool -list -v -keystore 自定义.keystore  
Enter keystore password: //输入密码，回车
```

```
密钥库类型: jks
密钥库提供方: SUN

您的密钥库包含 1 个条目

别名: aa
创建日期: 2023-7-3
条目类型: PrivateKeyEntry
证书链长度: 1
证书[1]:
所有者: CN=wang, OU=ml, O=ml, L=gz, ST=gz, C=cn
发布者: CN=wang, OU=ml, O=ml, L=gz, ST=gz, C=cn
序列号: 5a2b624b
生效时间: Mon Jul 03 17:41:43 CST 2023, 失效时间: Wed Jun 09 17:41:43 CST 2123
证书指纹:
         SHA1: D6:12:69:BD:88:E2:BE:D7:32:C9:61:2D:CF:EF:C2:E6:76:42:99:F8
         SHA256: 6A:5C:C8:E6:AE:72:1B:D9:BA:A5:2D:3A:53:E8:15:9F:2C:EB:4F:88:10:46:65:E6:58:CD:44:F5:04:F7:55:FD
签名算法名称: SHA256withRSA
主体公共密钥算法: 2048 位 RSA 密钥
版本: 3

扩展:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: B0 ED 20 25 0D 32 D7 C2   6D A2 B5 44 DA 5F 78 CE  .. %.2..m..D._x.
0010: 7B B9 97 C6                                        ....
]
]



*******************************************
*******************************************



Warning:
JKS 密钥库使用专用格式。建议使用 "keytool -importkeystore -srckeystore aa.keystore -destkeystore aa.keystore -deststoretype pkcs12" 迁移到行业标准格式 PKCS12。
```

