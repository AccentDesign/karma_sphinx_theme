.. Karma Sphinx documentation master file, created by
   sphinx-quickstart on Sat Jan 27 15:16:35 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome
=======

A simple responsive theme for sphinx. This theme is in it's early stage of development so only 
contains limited options.

Installing
----------

.. code-block:: bash

    pip install karma_sphinx_theme

Configuration
-------------

The theme's project-wide options are defined in the ``karma_sphinx_theme/theme.conf``
file, and can be defined in your project's ``conf.py`` via
``html_theme_options``. For example:

.. code:: python

    html_theme_options = {
        'navigation_depth': 2,
        'includehidden': True,
        'titles_only': False
    }

Options
^^^^^^^

* ``navigation_depth`` Int. Indicate the max depth of the tree, by default, 2 levels are included.
* ``includehidden`` Bool. Specifies if the sidebar includes toctrees marked with the ``:hidden:`` option
* ``titles_only`` Bool. If True, removes headers within a page from the sidebar.

Contents
--------

.. toctree::
   :maxdepth: 1

   admonitions
   demo
   lists
   structure
   tables
   api
   changelog
