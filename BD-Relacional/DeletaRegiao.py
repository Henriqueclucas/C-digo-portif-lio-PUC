import sqlalchemy as sa 
import ocorrencias as oc


engine = sa.create_engine("sqlite:///C://Users//Henrique//Documents//Pós//codigo-da-aula//Pós-Graduaçao//Nova Pasta//C-digo-portif-lio-PUC//BD-Relacional/ocorrencias.db")

metadata = sa.MetaData(bind=engine)
sa.MetaData.reflect(metadata)

tbMunicipio = metadata.tables[oc.municipio.__tablename__]

atualiza_regiao = sa.delete(tbMunicipio).values(
    {"regiao":"Rio de Janeiro"}
).where(
    tbMunicipio.c.codIBGE == 3304557
)

try:
    engine.execute(atualiza_regiao)
except ValueError:
    ValueError()