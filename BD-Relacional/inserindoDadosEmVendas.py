import pandas as pd

endereco = "C:\\Users\\Henrique\\Downloads\\Dados_Exemplo\\"

vendedor = pd.read_csv(endereco + "vendedor.csv", sep = ";")

tbVendedor = pd.DataFrame(vendedor)

import sqlalchemy as sa

engine = sa.create_engine("sqlite:///C://Users//Henrique//Documents//Pós//codigo-da-aula//Pós-Graduaçao//Nova Pasta//C-digo-portif-lio-PUC//BD-Relacional/vendas01.db")

import sqlalchemy.orm as orm

sessao = orm.sessionmaker(bind=engine)
sessao = sessao()

import vendas01 as vd

for i in range(len(tbVendedor)):
    dados_vendedor = vd.vendedor(
        registro_vendedor = int(tbVendedor['registro_vendedor'][i]),
        cpf = tbVendedor['cpf'][i],
        nome = tbVendedor["nome"][i],
        genero = tbVendedor ['genero'][i],
        email = tbVendedor ["email"][i]
    
    )
    
try: 
    sessao.add(dados_vendedor)
    sessao.commit()
    
except ValueError:
    ValueError()
    
    print("Dados inseridos na tbVendedor")