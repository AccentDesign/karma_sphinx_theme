from datetime import datetime


extensions = []
templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'

project = u'Karma Sphinx Theme'
year = datetime.now().year
copyright = u'%d Accent Design Group LTD' % year

exclude_patterns = ['_build']

html_theme = 'karma_sphinx_theme'
html_theme_options = {}

extensions.append('releases')
releases_github_path = 'accentdesign/karma_sphinx_theme'
releases_unstable_prehistory = True