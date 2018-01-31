# -*- coding: utf-8 -*-
import sys
import os
from datetime import datetime


sys.path.append(os.path.abspath('..'))
sys.path.append(os.path.abspath('.'))

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.mathjax',
    'sphinx.ext.viewcode',
    'releases'
]
templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'

project = u'Karma Sphinx Theme'
year = datetime.now().year
copyright = u'%d Accent Design Group LTD' % year

exclude_patterns = ['_build']

html_theme = 'karma_sphinx_theme'
html_theme_options = {
    # 'navigation_depth': 3,
    # 'titles_only': False,
    # 'includehidden': False,
}

html_theme_path = [".."]

releases_github_path = 'accentdesign/karma_sphinx_theme'
releases_unstable_prehistory = True