#!/usr/bin/env python

import codecs
from setuptools import setup

# Version info -- read without importing
_locals = {}
with open('karma_sphinx_theme/_version.py') as fp:
    exec(fp.read(), None, _locals)
version = _locals['__version__']

# README into long description
with codecs.open('README.md', encoding='utf-8') as f:
    readme = f.read()

setup(
    name='karma_sphinx_theme',
    version=version,
    description='A sphinx theme built with KarmaCSS',
    long_description=readme,
    author='Stuart George',
    author_email='stuart@accentdesign.co.uk',
    url='https://karma_sphinx_theme.readthedocs.io',
    packages=['karma_sphinx_theme'],
    include_package_data=True,
    entry_points={
        'sphinx.html_themes': [
            'karma_sphinx_theme = karma_sphinx_theme',
        ]
    },
    classifiers=[
    ],
)
