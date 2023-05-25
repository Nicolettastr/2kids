"""empty message

Revision ID: bc2a2e815f5a
Revises: 74eaea64885e
Create Date: 2023-05-25 11:53:24.570673

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bc2a2e815f5a'
down_revision = '74eaea64885e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('product')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('category', sa.VARCHAR(length=32), autoincrement=False, nullable=False),
    sa.Column('subcategory', sa.VARCHAR(length=32), autoincrement=False, nullable=False),
    sa.Column('measures', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('status', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('brand', sa.VARCHAR(length=30), autoincrement=False, nullable=False),
    sa.Column('product_img', sa.VARCHAR(length=1000), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='product_pkey'),
    sa.UniqueConstraint('name', name='product_name_key')
    )
    # ### end Alembic commands ###
