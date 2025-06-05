import sqlalchemy as sa
import sqlalchemy.orm as orm
import os

# Criação de pastas, se necessário
db_dir = os.path.join(os.getcwd(), "Pós-Graduaçao", "Nova Pasta", "C-digo-portif-lio-PUC", "BD-Relacional")
os.makedirs(db_dir, exist_ok=True)

# Caminho absoluto do banco de dados
db_path = os.path.join(db_dir, "vendas01.db")

# Correção na string de conexão: use três barras para relativo ou quatro para absoluto
engine = sa.create_engine(f"sqlite:///{db_path}", echo=True)

base = orm.declarative_base()


class cliente(base):
    __tablename__ = "cliente"

    cpf = sa.Column(sa.CHAR(14), primary_key = True, index = True)
    nome = sa.Column(sa.VARCHAR(100), nullable = False)
    email = sa.Column(sa.VARCHAR(50), nullable = False)
    genero = sa.Column(sa.CHAR(1))
    salario = sa.Column(sa.DECIMAL(10,2))
    dia_mes_aniversario = sa.Column(sa.CHAR(5))
    bairro = sa.Column(sa.VARCHAR(50))
    cidade = sa.Column(sa.VARCHAR(20))
    uf = sa.Column(sa.CHAR(2))

class fornecedor(base):
        __tablename__ = "fornecedor"

        registro_fornecedor = sa.Column(sa.INTEGER, primary_key = True, index = True, nullable = False)
        nome_fantasia = sa.Column(sa.VARCHAR(50), nullable = False)
        razao_social = sa.Column(sa.VARCHAR(100), nullable = False)
        cidade = sa.Column(sa.VARCHAR(50), nullable = False)
        uf = sa.Column(sa.CHAR(2))


class produto(base):
        __tablename__ = "produto"

        codBarras = sa.Column(sa.INTEGER, primary_key = True, index = True, nullable = False)
        registro_fornecedor = sa.Column(sa.INTEGER, sa.ForeignKey("fornecedor.registro_fornecedor", ondelete="NO ACTION", onupdate="CASCADE"), index = True)
        dcs_produto = sa.Column(sa.VARCHAR(100), nullable = False)
        genero = sa.Column(sa.CHAR(1))



class vendedor(base):
        __tablename__ = "vendedor"

        registro_vendedor = sa.Column(sa.INTEGER, primary_key = True, index = True, nullable = False)
        cpf = sa.Column(sa.CHAR(14), nullable = False)
        nome = sa.Column(sa.VARCHAR(100), nullable = False)
        email = sa.Column(sa.VARCHAR(100), nullable = False)
        genero = sa.Column(sa.CHAR(1))

class venda(base):
        __tablename__ = "venda"

        idTransacao = sa.Column(sa.INTEGER, primary_key = True, index = True, nullable = False)
        cpf = sa.Column(sa.CHAR(14), sa.ForeignKey("cliente.cpf", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
        registro_vendedor = sa.Column(sa.INTEGER, sa.ForeignKey("vendedor.registro_vendedor", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
        codBarras = sa.Column(sa.INTEGER, sa.ForeignKey("produto.codBarras", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)

     
    
try:
       base.metadata.create_all(engine) #criar tabela 
       print("Tabelas criadas")
except Exception as e:
    print(f"Erro ao criar tabelas: {e}")
        